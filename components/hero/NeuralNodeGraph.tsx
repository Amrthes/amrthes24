"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { NeuralGraphFallback } from "./NeuralGraphFallback";

export default function NeuralNodeGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let animId: number;

    try {
      const width = container.clientWidth || 400;
      const height = container.clientHeight || 400;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
      camera.position.z = 85;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Create Node Graph Group
      const graphGroup = new THREE.Group();
      scene.add(graphGroup);

      // Generate nodes
      const nodeCount = 55;
      const nodesData: THREE.Vector3[] = [];
      const nodeVelocities: THREE.Vector3[] = [];
      const radius = 35;

      for (let i = 0; i < nodeCount; i++) {
        // Distribute within sphere shell
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = Math.cbrt(Math.random()) * radius;
        const sinPhi = Math.sin(phi);

        const x = r * sinPhi * Math.cos(theta);
        const y = r * sinPhi * Math.sin(theta);
        const z = r * Math.cos(phi);

        nodesData.push(new THREE.Vector3(x, y, z));
        nodeVelocities.push(
          new THREE.Vector3(
            (Math.random() - 0.5) * 0.05,
            (Math.random() - 0.5) * 0.05,
            (Math.random() - 0.5) * 0.05
          )
        );
      }

      // Nodes Geometry & Material
      const nodeGeometry = new THREE.SphereGeometry(0.7, 12, 12);
      const nodeMaterialEmerald = new THREE.MeshBasicMaterial({ color: 0x00ff66 });
      const nodeMaterialCyan = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
      const nodeMaterialCore = new THREE.MeshBasicMaterial({ color: 0xffffff });

      const nodeMeshes: THREE.Mesh[] = [];
      nodesData.forEach((pos, idx) => {
        let mat = nodeMaterialEmerald;
        if (idx % 4 === 0) mat = nodeMaterialCyan;
        if (idx === 0) mat = nodeMaterialCore;

        const mesh = new THREE.Mesh(nodeGeometry, mat);
        mesh.position.copy(pos);
        graphGroup.add(mesh);
        nodeMeshes.push(mesh);
      });

      // Synaptic Lines Geometry (Dynamic line segments)
      const maxDistance = 22;
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x00ff66,
        transparent: true,
        opacity: 0.22,
        blending: THREE.AdditiveBlending,
      });

      const lineGeometry = new THREE.BufferGeometry();
      const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      graphGroup.add(lineMesh);

      // Outer wireframe ring
      const ringGeo = new THREE.TorusGeometry(38, 0.2, 16, 80);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.15,
        wireframe: true,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 3;
      graphGroup.add(ringMesh);

      // Mouse Parallax
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (event: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((event.clientX - rect.left) / width - 0.5) * 2;
        mouseY = -((event.clientY - rect.top) / height - 0.5) * 2;
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Resize Handler
      const handleResize = () => {
        if (!container || !renderer) return;
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };
      window.addEventListener("resize", handleResize);

      // Animation Loop
      const animate = () => {
        animId = requestAnimationFrame(animate);

        // Slow automatic rotation
        graphGroup.rotation.y += 0.003;
        graphGroup.rotation.x += 0.001;
        ringMesh.rotation.z += 0.005;

        // Smooth mouse tilt
        targetX += (mouseX * 0.4 - targetX) * 0.05;
        targetY += (mouseY * 0.4 - targetY) * 0.05;
        graphGroup.rotation.y += targetX * 0.02;
        graphGroup.rotation.x += -targetY * 0.02;

        // Update node positions subtly
        for (let i = 0; i < nodeCount; i++) {
          nodesData[i].add(nodeVelocities[i]);
          // Bounce off boundary sphere
          if (nodesData[i].length() > radius) {
            nodeVelocities[i].negate();
          }
          nodeMeshes[i].position.copy(nodesData[i]);
        }

        // Recompute dynamic synapses
        const linePositions: number[] = [];
        for (let i = 0; i < nodeCount; i++) {
          for (let j = i + 1; j < nodeCount; j++) {
            const dist = nodesData[i].distanceTo(nodesData[j]);
            if (dist < maxDistance) {
              linePositions.push(
                nodesData[i].x,
                nodesData[i].y,
                nodesData[i].z,
                nodesData[j].x,
                nodesData[j].y,
                nodesData[j].z
              );
            }
          }
        }

        lineGeometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(linePositions, 3)
        );

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        if (renderer && renderer.domElement) {
          container.removeChild(renderer.domElement);
          renderer.dispose();
        }
        nodeGeometry.dispose();
        lineGeometry.dispose();
        ringGeo.dispose();
      };
    } catch {
      setHasError(true);
    }
  }, []);

  if (isReducedMotion || hasError) {
    return <NeuralGraphFallback />;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[360px] sm:h-[460px] lg:h-[540px] flex items-center justify-center cursor-crosshair"
      aria-label="3D Interactive Neural Network Node Graph"
    />
  );
}
