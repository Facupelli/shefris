import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro/Intro'
import Nav from '../components/Nav/Nav'
import styles from '../styles/Home.module.css'

export default function Home() {
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
      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}
