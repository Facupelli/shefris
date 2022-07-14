import { Canvas, useFrame } from "@react-three/fiber";
import {
  GizmoHelper,
  OrbitControls,
  PerspectiveCamera,
  Segments,
} from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import PizzaBlend from "../PizzaBlend";

import s from "./DesktopScene.module.scss";

export default function DesktopScene({
  introRef,
  headerRef,
  secondHeaderRef,
  device,
}) {
  const orbitControlsRef = useRef(null);

  return (
    <Canvas className={s.canvas}>
      <Frame orbitControlsRef={orbitControlsRef} />

      <Suspense fallback={null}>
        <PizzaBlend
          device={device}
          introRef={introRef}
          orbitControlsRef={orbitControlsRef}
          headerRef={headerRef}
          secondHeaderRef={secondHeaderRef}
        />
      </Suspense>
    </Canvas>
  );
}

const Frame = ({ orbitControlsRef }) => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[2, 3, 0]} />
      {/* <ambientLight intensity={1.25} /> */}
      {/* <directionalLight position={[-2, 5, 2]} intensity={0.4} /> */}
      <OrbitControls
        ref={orbitControlsRef}
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
      />
      <Segments />
      <GizmoHelper />
    </>
  );
};
