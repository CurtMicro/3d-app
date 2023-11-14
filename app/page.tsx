"use client"
import { Canvas, useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three-stdlib";
import styled from "styled-components";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Home() {

  const Model = () => {
    const gltf = useLoader(GLTFLoader, "/models/future_car/scene.gltf");

    return (
      <>

        <primitive dispose={null} object={gltf.scene} scale={2} />
      </>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ThreeDContainer>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={2} position={[10, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <Model />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls autoRotate />
        </Canvas>
      </ThreeDContainer>
    </main>
  );
}

const ThreeDContainer = styled.div`
  canvas {
    height:600px !important;
    width:600px !important;
  }
`;
