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

  const SpiderModel = () => {
    const spider = useLoader(GLTFLoader, "/models/spider_tank/scene.gltf");
    return (
      <>
        <primitive dispose={null} object={spider.scene} scale={2} />
      </>
    );
  }

  return (
    <main className="w-screen min-h-screen" >
      <div className="w-screen h-16 bg-slate-600 flex items-center justify-between mb-16">
        <h1 className="ml-20">Logo</h1>
        <div className="flex items-center gap-10 justify-end mr-20">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>I'm Gunna Come</h1>
          <h1>Derpinstein</h1>
        </div>
      </div>
      <div className="flex w-screen  h-fill items-center justify-evenly flex-wrap p-4 bg-slate-600" id="carousel">
        <ThreeDContainer className="modelSlide" id="modelOne">
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
        <ThreeDContainer className="modelSlide" id="modelTwo">
          <Canvas shadows dpr={[1, 2]} camera={{ position: [4, 4, 2], fov: 80 }}>
            <ambientLight intensity={0.7} />
            <spotLight intensity={0.8} angle={50} penumbra={6} position={[10, 15, 10]} castShadow />
            <Suspense fallback={null}>
              <LamboModel />
              <Environment preset="city" />
            </Suspense>
            <OrbitControls autoRotate />
          </Canvas>
        </ThreeDContainer>
        <ThreeDContainer className="modelSlide" id="modelThree">
          <Canvas shadows dpr={[1, 2]} camera={{ position: [400, 400, 100], fov: 80 }}>
            <ambientLight intensity={0.7} />
            <spotLight intensity={0.8} angle={15} penumbra={6} position={[10, 15, 10]} castShadow />
            <Suspense fallback={null}>
              <SpiderModel />
              <Environment preset="city" />
            </Suspense>
            <OrbitControls autoRotate />
          </Canvas>
        </ThreeDContainer>
      </div>
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
