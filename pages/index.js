import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faNodeJs, faBootstrap, faWordpress } from "@fortawesome/free-brands-svg-icons";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Patrick Cain | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="row" className={styles.hero}>
          <h1 className={styles.heading}>
            <p className={styles.heading__tagline}>Hello,</p>
            <p className={styles.heading__main}>I am Patrick</p>
          </h1>
          <h2 className={styles.heading_secondary}>
            I'm a full-stack web developer.
          </h2>
        </section>

        <section className="row" className={styles.about_summary}>
          <p>
            I'm a Minnesota based-full stack developer with experience in JavaScript and WordPress. I currently use my knowledge with software and technology to assist local non-profits build responsive and accessible websites.
          </p>
          <a className={styles.btn_download} href="/patrick-cain-resume-v2.pdf" download="patrick_cain_resume">Download Resume</a>
          <div className={styles.favoriteTools}>
            <h2 className={styles.heading_tertiary}>Fav Tools</h2>
            <FontAwesomeIcon icon={faJsSquare} className={styles.favoriteToolsIcon} />
            <FontAwesomeIcon icon={faReact} className={styles.favoriteToolsIcon} />
            <FontAwesomeIcon icon={faNodeJs} className={styles.favoriteToolsIcon} />
            <FontAwesomeIcon icon={faBootstrap} className={styles.favoriteToolsIcon} />
            <FontAwesomeIcon icon={faWordpress} className={styles.favoriteToolsIcon} />
          </div>


          
        </section>

        
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
