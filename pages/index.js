import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/Header/header";
import TestContent from "../components/TestContent/TestContent";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homework 1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/1_number_black_and_white.svg" />
      </Head>

      <main className={styles.main}>
            <Header/>
            <div className={styles.main_container}>
                <TestContent/>
            </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
