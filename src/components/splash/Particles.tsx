/* eslint-disable */
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Clock } from "three";

const Particles = () => {
  const containerRef: React.LegacyRef<HTMLDivElement> = useRef(null);
  let clock: Clock | null = null;

  useEffect(() => {
    // Canvas
    const canvas = document.createElement("canvas");
    containerRef.current?.appendChild(canvas);

    // Set container position and size
    if (containerRef.current) {
      containerRef.current.style.position = "absolute";
      containerRef.current.style.top = "30%";
      containerRef.current.style.left = "0";
      containerRef.current.style.width = "100%";
      containerRef.current.style.height = "20%";
      containerRef.current.style.zIndex = "10";
    }

    // Scene
    const scene = new THREE.Scene();

    // Textures
    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load(
      "https://threejs.org/examples/textures/sprites/circle.png"
    );

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 6000;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 5);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
      colors[i] = Math.random();
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial();

    particlesMaterial.size = 0.02;
    particlesMaterial.sizeAttenuation = true;

    particlesMaterial.color = new THREE.Color("#ffffff");

    particlesMaterial.transparent = true;
    particlesMaterial.alphaMap = particleTexture;
    particlesMaterial.depthWrite = false;
    particlesMaterial.blending = THREE.AdditiveBlending;

    particlesMaterial.vertexColors = true;

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 8;
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const handleResize = () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Animation
    clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock?.getElapsedTime();

      // Update particles
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = particlesGeometry.attributes.position.array[i3];
        if (elapsedTime)
          particlesGeometry.attributes.position.array[i3 + 1] = Math.sin(
            elapsedTime * 0.7 + x * 0.5
          );
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Render
      renderer.render(scene, camera);

      // Call animate again on the next frame
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      if (clock) clock.stop();
      scene.remove(particles);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default Particles;
