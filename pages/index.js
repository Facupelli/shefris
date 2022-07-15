import * as THREE from "three";
import prisma from "../lib/prisma";
import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import shefrisLogoTra from "../public/shefrisLogoTra.png";

//COMPONENTS
import Nav from "../components/Nav/Nav";
import Intro from "../components/Intro/Intro";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footers/Footer";

import styles from "../styles/Home.module.scss";

export default function Home({ pizzas }) {
  const [device, setDevice] = useState("");
  const [appLoading, setAppLoading] = useState(false);

  const loadingManager = new THREE.LoadingManager();

  loadingManager.onLoad = () => {
    console.log("Loading complete!");
    setAppLoading(false);
  };

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   setTimeout(() => {
  //     setAppLoading(false);
  //     document.body.style.overflow = "auto";
  //   }, 6000);
  // }, []);

  useEffect(() => {
    const deviceType = () => {
      const ua = navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
      } else if (
        /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
          ua
        )
      ) {
        return "mobile";
      }
      return "desktop";
    };

    setDevice(deviceType());
  }, []);

  if (appLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Shefris napoletano</title>
        <meta name="description" content="Pizza napolitana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Nav />
      </header>

      <main className={styles.main}>
        <Intro device={device} />
        {/* <Menu pizzas={pizzas} /> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export async function getServerSideProps() {
  const pizzas = await prisma.pizza.findMany({});

  return {
    props: {
      pizzas,
    },
  };
}

const LoadingScreen = () => {
  return (
    <div className={styles.loading_screen}>
      {/* <p>LOADING...</p> */}
      <div>
        <Image
          src={shefrisLogoTra}
          width="100"
          height="100"
          alt="logo"
          objectFit="contain"
        />
      </div>
    </div>
  );
};
