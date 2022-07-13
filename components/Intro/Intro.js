import dynamic from "next/dynamic";
import ItalyFlagIcon from "../../icons/ItalyFlagIcon";
import { useDeviceOrientation } from "../../hooks/useDeviceOrientation";

import s from "./Intro.module.scss";

const Scene = dynamic(
  () => {
    return import("./Scene/Scene");
  },
  { ssr: false }
);

export default function Intro() {
  const { orientation, requestAccess, revokeAccess, error } =
    useDeviceOrientation();

  const orientationInfo = orientation && (
    <ul>
      <li>
        ɑ: <code>{orientation.alpha}</code>
      </li>
      <li>
        β: <code>{orientation.beta}</code>
      </li>
      <li>
        γ: <code>{orientation.gamma}</code>
      </li>
    </ul>
  );

  return (
    <section className={s.container}>
      <Scene />
      <h1 className={s.header}>
        LA PIZZA NO SE <span>MANCHA</span>
      </h1>
      <h2 className={s.hashtag}>
        <ItalyFlagIcon /> Pizza Napoletana
      </h2>
      {orientationInfo}
    </section>
  );
}
