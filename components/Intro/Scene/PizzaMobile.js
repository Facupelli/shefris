import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";

export default function PizzaMobile({ ...props }) {
  const group = useRef();

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

  useEffect(() => {
    const element = group;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: props.introRef.current,
          start: "top top",
          pin: true,
          end: "+=" + window.innerHeight * 3,
          scrub: 0.5,
        },
      })
      .fromTo(
        element.current.scale,
        { x: 0.5, y: 0.5, z: 0.5 },
        { x: 1, y: 1, z: 1 }
      )
      .to(element.current.position, { x: 0.3 })
      .fromTo(
        props.headerRef.current,
        { scale: 0, opacity: 0.5 },
        { scale: 1.3, opacity: 1 },
        "<"
      )
      .to(props.headerRef.current, { scale: 1 })
      .to(props.secondHeaderRef.current, { y: -4 });
  }, []);

  useEffect(() => {
    if (!!props.orbitControlsRef.current) {
      console.log("ORBITSCONTROL", props.orbitControlsRef.current);
    }
  }, [props.orbitControlsRef.current]);

  console.log("GROUP", group);

  useEffect(() => {
    console.log("GROUP", document.querySelector("main-group"));
  }, []);

  const { nodes, materials } = useGLTF("/pizzaBlend.gltf");
  return (
    <group ref={group} {...props} dispose={null} className="main-group">
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
