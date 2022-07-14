import prisma from "../lib/prisma";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

//COMPONENTS
import Nav from "../components/Nav/Nav";
import Intro from "../components/Intro/Intro";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footers/Footer";

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
