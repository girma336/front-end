/* eslint-disable */
// @ts-nocheck
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface IcosahedronProps {
  explode: boolean;
}

export default function Icosahedron({ explode }: IcosahedronProps) {
  const vertexColors = [];

  // Logo Geometry
  const geometry = new THREE.IcosahedronGeometry(5, 2);

  const arrayOfColors = [
    0x66c2b0, 0xf5eb24, 0x1872b4, 0x71bb4b, 0xb55296, 0xf7961b, 0xeb1a1f,
  ];
  let index = 0;
  for (let i = 0; i < geometry.attributes.position.array.length; i += 9) {
    const c = new THREE.Color(arrayOfColors[index % arrayOfColors.length]);
    vertexColors.push(c.r, c.g, c.b);
    vertexColors.push(c.r, c.g, c.b);
    vertexColors.push(c.r, c.g, c.b);
    index++;
  }

  geometry.setAttribute(
    "color",
    new THREE.Float32BufferAttribute(vertexColors, 3)
  );
  geometry.computeVertexNormals();

  const material = new THREE.MeshLambertMaterial({
    vertexColors,
    outputEncoding: THREE.sRGBEncoding,
    polygonOffset: true,
    polygonOffsetUnits: 1,
    polygonOffsetFactor: 1,
  });

  const sphere = new THREE.Mesh(geometry, material);

  const meshRef = useRef();

  useEffect(() => {
    const positions = meshRef.current?.geometry.attributes.position.array;

    const initialPositions = new Float32Array(positions.length);
    initialPositions.set(positions);

    const targetPositions = new Float32Array(positions.length);
    targetPositions.set(positions);

    if (explode) {
      // Set initial positions to exploded state
      for (let i = 0; i < targetPositions.length; i += 3) {
        const scale = Math.random() * 10 + 5;
        targetPositions[i] *= scale;
        targetPositions[i + 1] *= scale;
        targetPositions[i + 2] *= scale;

        // Set positions to exploded state
        positions[i] = targetPositions[i] / 20;
        positions[i + 1] = targetPositions[i + 1] / 20;
        positions[i + 2] = targetPositions[i + 2] / 20;
      }
    }

    const update = () => {
      let isAnimating = false;

      if (explode) {
        for (let i = 0; i < positions.length; i += 3) {
          positions[i] += (targetPositions[i] - positions[i]) * 0.01;
          positions[i + 1] +=
            (targetPositions[i + 1] - positions[i + 1]) * 0.01;
          positions[i + 2] +=
            (targetPositions[i + 2] - positions[i + 2]) * 0.01;

          // Check if any positions are still not in their target positions
          if (
            Math.abs(positions[i] - targetPositions[i]) > 0.1 ||
            Math.abs(positions[i + 1] - targetPositions[i + 1]) > 0.1 ||
            Math.abs(positions[i + 2] - targetPositions[i + 2]) > 0.1
          ) {
            isAnimating = true;
          }
        }
      }

      if (meshRef.current && meshRef.current.geometry) {
        meshRef.current.geometry.attributes.position.needsUpdate = true;
      }

      if (!isAnimating && explode) {
        // Disassemble animation complete
        // Remove all the pieces of the icosahedron
        sphere.children.forEach((child) => {
          sphere.remove(child);
        });

        // Scale the sphere out of the camera
        const scaleFactor = 5;
        const spherePosition = sphere.position;
        const cameraPosition = new THREE.Vector3(0, 0, -100); // Adjust camera position if needed

        sphere.scale.set(scaleFactor, scaleFactor, scaleFactor);
        sphere.position.set(
          cameraPosition.x +
            (spherePosition.x - cameraPosition.x) * scaleFactor,
          cameraPosition.y +
            (spherePosition.y - cameraPosition.y) * scaleFactor,
          cameraPosition.z + (spherePosition.z - cameraPosition.z) * scaleFactor
        );

        // Make the sphere invisible
        sphere.visible = false;
      }

      if (isAnimating) {
        requestAnimationFrame(update);
      } else {
        // Animation complete
        if (!explode) {
          // Add wireframe lines to the Icosahedron
          const wireframeMaterial = new THREE.LineBasicMaterial({
            color: 0x000000,
          });

          const wireframe = new THREE.LineSegments(
            new THREE.WireframeGeometry(geometry),
            wireframeMaterial
          );

          sphere.add(wireframe);

          // Add dots connecting the vertices of the triangle pieces
          const dots = new THREE.Object3D();
          const vertices = positions;
          const vertexCount = vertices.length / 3;
          const dotSize = 0.1;

          for (let i = 0; i < vertexCount; i++) {
            const dotGeometry = new THREE.CircleGeometry(dotSize, 16);
            const dotMaterial = new THREE.MeshBasicMaterial({
              color: 0x000000,
              side: THREE.DoubleSide,
            });
            const dot = new THREE.Mesh(dotGeometry, dotMaterial);

            const vertexIndex = i * 3;
            const vertexX = vertices[vertexIndex];
            const vertexY = vertices[vertexIndex + 1];
            const vertexZ = vertices[vertexIndex + 2];

            dot.position.set(vertexX, vertexY, vertexZ);
            dot.lookAt(sphere.position);
            dots.add(dot);
          }

          sphere.add(dots);
        }
      }
    };

    update();
  }, [explode]);

  return <primitive object={sphere} ref={meshRef} />;
}
