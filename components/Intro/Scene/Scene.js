import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Pizza from "./Pizza";

import s from "./Scene.module.scss";

export default function Scene() {
  return (
    <Canvas camera={{ position: [2, 0, 12.25], fov: 15 }} className={s.canvas}>
      <ambientLight intensity={1.25} />
      <directionalLight position={[-2, 5, 2]} intensity={0.4} />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <Pizza />
      </Suspense>
    </Canvas>
  );
}
