import prisma from "../lib/prisma";
import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro/Intro";
import Nav from "../components/Nav/Nav";
import styles from "../styles/Home.module.css";
import Menu from "../components/Menu/Menu";

export default function Home({ pizzas }) {
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
        <Intro />
        <Menu pizzas={pizzas} />
      </main>

      <footer className={styles.footer}></footer>
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
