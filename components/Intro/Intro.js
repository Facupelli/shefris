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

  // useEffect(() => {
  //   const element = introRef.current;
  //   const title = element.querySelector(`.${s.hola_wrapper}`).children[0]
  //   console.log("TITLE",title)
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: element.querySelector(`.${s.hola_wrapper}`),
  //       start: "top top",
  //       pin: true,
  //       end: "+=" + window.innerHeight * 3,
  //       scrub: 0.5,
  //     }
  //   })
  //     .to(title,{x:-100, opacity:0})
  //     // .to(title,{x:100, opacity:0}, "<")
  //     // .set(title, {opacity:1}, "<")
  // },[])

  return (
    <section className={s.container} ref={introRef}>
      <div className={s.scene_wrapper}>
        <Scene introRef={introRef} />
      </div>
      <div className={s.header_wrapper}>
        <h1 className={s.header}>
          LA PIZZA NO SE <span>MANCHA</span>
        </h1>
      </div>
      <h2 className={s.hashtag}>
        <ItalyFlagIcon /> Pizza Napoletana
      </h2>
    </section>
  );
}
