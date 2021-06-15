import Head from 'next/head'
import styles from '../styles/Home.module.scss'

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

        <section className={styles.about_summary}>
          <p>
            I'm a Minnesota based-full stack developer with experience in JavaScript and WordPress. I currently use my knowledge with software and technology to assist local non-profits build responsive and accessible websites.
          </p>
          {/* <button type="button" className="btn btn-lg" className={styles.btn__main}>Download Resume</button> */}
          <a className={styles.btn_download} href="/patrick-cain-resume-v2.pdf" download="patrick_cain_resume">Download Resume</a>
        </section>
        
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
