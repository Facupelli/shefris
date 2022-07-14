import dynamic from "next/dynamic";
import ItalyFlagIcon from "../../icons/ItalyFlagIcon";
import { useEffect } from "react";

import s from "./Intro.module.scss";

const Scene = dynamic(
  () => {
    return import("./Scene/Scene");
  },
  { ssr: false }
);

export default function Intro() {
  return (
    <section className={s.container}>
      <Scene />
      <h1 className={s.header}>
        LA PIZZA NO SE <span>MANCHA</span>
      </h1>
      <h2 className={s.hashtag}>
        <ItalyFlagIcon /> Pizza Napoletana
      </h2>
    </section>
  );
}
