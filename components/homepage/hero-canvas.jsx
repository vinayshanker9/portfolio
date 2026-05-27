"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion for accessibility
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // 1. Setup Scene, Camera, and WebGL Renderer
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    const scene = new THREE.Scene();
    
    // Position camera with optimal field of view
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Generate Sphere Geometry with Golden Spiral Particle Distribution
    const particleCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const radius = 5.5;
    const colorAccent = new THREE.Color("#E50914"); // Netflix Red highlight
    const colorSecondary = new THREE.Color("#B81D24"); // Dark Netflix Red highlight

    for (let i = 0; i < particleCount; i++) {
      // Math equation for uniform golden spiral spherical distribution
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Interpolate colors dynamically based on vertical coordinate to create a beautiful gradient
      const mixedColor = colorAccent.clone().lerp(colorSecondary, Math.sin(phi) * 0.5 + 0.5);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // 3. Create Points Canvas texture (to create glowing round particle elements)
    const canvasTexture = document.createElement("canvas");
    canvasTexture.width = 16;
    canvasTexture.height = 16;
    const ctx = canvasTexture.getContext("2d");
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, "rgba(255, 255, 255, 1)");
    grad.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 16);
    
    const texture = new THREE.CanvasTexture(canvasTexture);

    const material = new THREE.PointsMaterial({
      size: 0.18,
      map: texture,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Add a subtle outer geometric wireframe sphere to provide structural depth
    const wireGeometry = new THREE.SphereGeometry(radius, 16, 16);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xE50914,
      wireframe: true,
      transparent: true,
      opacity: 0.07,
      blending: THREE.AdditiveBlending,
    });
    const wireSphere = new THREE.Mesh(wireGeometry, wireMaterial);
    scene.add(wireSphere);

    // 4. Cursor position tracking with interpolation targets
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e) => {
      mouse.targetX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      mouse.targetY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    };
    window.addEventListener("mousemove", onMouseMove);

    // 5. Scroll updates tracking
    const scrollState = { value: 0 };
    const onScroll = () => {
      scrollState.value = window.scrollY / window.innerHeight;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // 6. Responsive Resize Handling
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // 7. Render & Animation loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse coordinate easing with standard spring physics
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Base rotation
      particleSystem.rotation.y = elapsedTime * 0.1;
      particleSystem.rotation.x = elapsedTime * 0.05;
      wireSphere.rotation.y = elapsedTime * 0.1;
      wireSphere.rotation.x = elapsedTime * 0.05;

      // Tilt response to cursor movement
      particleSystem.rotation.y += mouse.x * 0.25;
      particleSystem.rotation.x -= mouse.y * 0.25;
      wireSphere.rotation.y += mouse.x * 0.25;
      wireSphere.rotation.x -= mouse.y * 0.25;

      // Dynamic breathing algorithm (modulating buffer geometries)
      const positionAttr = geometry.attributes.position;
      const array = positionAttr.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        
        // Modulate scale slightly based on coordinates and elapsed time
        const scale = 1 + Math.sin(elapsedTime * 1.4 + (x + y) * 0.15) * 0.015;
        array[i3] = x * scale;
        array[i3 + 1] = y * scale;
        array[i3 + 2] = positions[i3 + 2] * scale;
      }
      positionAttr.needsUpdate = true;

      // Scroll physics integration
      const scrollFactor = Math.min(1.2, scrollState.value);
      
      // Scale down sphere as you scroll
      particleSystem.scale.setScalar(1 - scrollFactor * 0.45);
      wireSphere.scale.setScalar(1 - scrollFactor * 0.45);
      
      // Shift sphere coordinates dynamically on scroll
      const isDesktop = window.innerWidth > 1024;
      const shiftX = isDesktop ? scrollFactor * 3.8 : 0;
      const shiftY = -scrollFactor * 5;
      particleSystem.position.x = shiftX;
      particleSystem.position.y = shiftY;
      wireSphere.position.x = shiftX;
      wireSphere.position.y = shiftY;

      // Opacity decay
      material.opacity = Math.max(0, 1 - scrollFactor * 1.4);
      wireMaterial.opacity = Math.max(0, 0.07 - scrollFactor * 0.1);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 8. Event Cleanup and WebGL Disposal
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 select-none pointer-events-none" 
      style={{ overflow: "hidden" }}
    />
  );
}
