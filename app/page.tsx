"use client"
import { Canvas, useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three-stdlib";
import styled from "styled-components";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Home() {

  const CarModel = () => {
    const car = useLoader(GLTFLoader, "/models/future_car/scene.gltf");
    return (
      <>
        <primitive dispose={null} object={car.scene} scale={2} />
      </>
    );
  }

  const LamboModel = () => {
    const lambo = useLoader(GLTFLoader, "/models/lambo/scene.gltf");
    return (
      <>
        <primitive dispose={null} object={lambo.scene} scale={2} />
      </>
    );
  }

  return (
    <main className="flex w-screen  min-h-screen items-center justify-evenly flex-wrap">
      <ThreeDContainer>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [10, 10, 5], fov: 80 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.8} angle={0.1} penumbra={6} position={[10, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <CarModel />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls autoRotate />
        </Canvas>
      </ThreeDContainer>
      <ThreeDContainer>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [5, 5, 2], fov: 80 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.8} angle={50} penumbra={6} position={[10, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <LamboModel />
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
    border: 1px solid red;
    height:500px !important;
    width:500px !important;
  }
`;
