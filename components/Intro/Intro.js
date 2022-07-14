import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import dynamic from "next/dynamic";
import ItalyFlagIcon from "../../icons/ItalyFlagIcon";
import { useEffect, useRef, useState } from "react";

import s from "./Intro.module.scss";

const Scene = dynamic(
  () => {
    return import("./Scene/DesktopScene/DesktopScene");
  },
  { ssr: false }
);

export default function Intro({ device }) {
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
          device={device}
        />
        <DesktopHeaders
          headerRef={headerRef}
          secondHeaderRef={secondHeaderRef}
        />
      </div>
    </section>
  );
}

const DesktopHeaders = ({ headerRef, secondHeaderRef }) => {
  return (
    <div className={s.headers_wrapper}>
      <h1 className={s.header} ref={headerRef}>
        LA PIZZA NO SE <span>MANCHA</span>
      </h1>
      <h2 className={s.second_header} ref={secondHeaderRef}>
        <ItalyFlagIcon /> Pizza Napoletana
      </h2>
    </div>
  );
};

