import dynamic from "next/dynamic";

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
    </section>
  );
}
