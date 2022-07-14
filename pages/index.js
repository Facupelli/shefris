import prisma from "../lib/prisma";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";

//COMPONENTS
import Nav from "../components/Nav/Nav";
import Intro from "../components/Intro/Intro";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footers/Footer";

export default function Home({ pizzas }) {
  const [device, setDevice] = useState("");

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

    setDevice(deviceType())
  }, []);


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
        <Intro device={device}/>
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
