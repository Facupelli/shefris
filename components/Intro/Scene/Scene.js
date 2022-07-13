import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import Pizza from "./Pizza";
import PizzaBlend from "./PizzaBlend";

import s from "./Scene.module.scss";

export default function Scene() {
  return (
    <Canvas className={s.canvas}>
      <Frame />
      <Suspense fallback={null}>
        <PizzaBlend />
      </Suspense>
    </Canvas>
  );
}

const Frame = () => {
  const orbitControlsRef = useRef(null)

  useFrame((state) => {
    // console.log(state.mouse)
  });

  useEffect(() => {
    if(!!orbitControlsRef.current){
      console.log(orbitControlsRef.current)
    }
  },[orbitControlsRef.current])

  return (
    <>
      <PerspectiveCamera makeDefault position={[2, 3, 0]} />
      <ambientLight intensity={1.25} />
      <directionalLight position={[-2, 5, 2]} intensity={0.4} />
      <OrbitControls ref={orbitControlsRef} />
    </>
  );
};
