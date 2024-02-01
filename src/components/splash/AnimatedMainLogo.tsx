/* eslint-disable */
import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Icosahedron from "./IcosahedronGeometry";

interface MainLogoProps {
  autoRotate: boolean;
  animationEnabled: boolean;
}

export default function AnimatedMainLogo({
  autoRotate,
  animationEnabled,
}: MainLogoProps) {
  return (
    <Canvas
      className="logo-container"
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        outputEncoding: THREE.sRGBEncoding,
      }}
      camera={{
        position: [0, 0, 40],
        fov: 16,
        near: 0.1,
        far: 1000,
      }}
    >
      <ambientLight intensity={2.5} />
      <OrbitControls
        autoRotate={autoRotate}
        enableZoom={false}
        enablePan={false}
      />
      <Icosahedron explode={animationEnabled} />
    </Canvas>
  );
}
