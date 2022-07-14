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
  const orbitControlsRef = useRef(null);

  const angleToRadians = (angle) => {
    return (angle * Math.PI) / 180;
  };

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;

      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
      orbitControlsRef.current.setPolarAngle(
        (y + 0.5) * angleToRadians(90 - 30)
      );
      orbitControlsRef.current.update();
    }
  });

  useEffect(() => {
    if (!!orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, [orbitControlsRef.current]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[2, 3, 0]} />
      <ambientLight intensity={1.25} />
      <directionalLight position={[-2, 5, 2]} intensity={0.4} />
      <OrbitControls
        ref={orbitControlsRef}
        enablePan={false}
        enableZoom={false}
      />
    </>
  );
};
