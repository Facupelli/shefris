import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();

  console.log("GRUPO", group);

  const useDeviceSensors = () => {
    try {
      const sensor = new AbsoluteOrientationSensor({ frequency: 60 });
      sensor.onreading = () =>
        group.current.quaternion.fromArray(sensor.quaternion);
      sensor.onerror = (event) => {
        if (event.error.name === "NotReadableError") {
          console.log("Sensor is not available");
        }
      };
      sensor.start();
    } catch (e) {
      console.log("TRY THIS ON MOBILE!");
    }
  };

  useEffect(() => {
    useDeviceSensors();
  }, [group]);

  const { nodes, materials } = useGLTF("/pizzaBlend.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, -0.11, 0]} scale={3.5}>
            <mesh
              geometry={nodes.g0001.geometry}
              material={materials.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/pizzaBlend.gltf");
