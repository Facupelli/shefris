import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import dynamic from "next/dynamic";
import ItalyFlagIcon from "../../icons/ItalyFlagIcon";
import { useEffect, useRef } from "react";

import s from "./Intro.module.scss";

const Scene = dynamic(
  () => {
    return import("./Scene/Scene");
  },
  { ssr: false }
);

export default function Intro() {
  gsap.registerPlugin(ScrollTrigger);
  const introRef = useRef(null);
  const headerRef = useRef(null);
  const secondHeaderRef = useRef(null);

  return (
    <section className={s.container} ref={introRef}>
      <div className={s.scene_wrapper}>
        <Scene
          introRef={introRef}
          headerRef={headerRef}
          secondHeaderRef={secondHeaderRef}
        />
      </div>
      <div className={s.headers_wrapper}>
        <h1 className={s.header} ref={headerRef}>
          LA PIZZA NO SE <span>MANCHA</span>
        </h1>
        <h2 className={s.second_header} ref={secondHeaderRef}>
          <ItalyFlagIcon /> Pizza Napoletana
        </h2>
      </div>
    </section>
  );
}
