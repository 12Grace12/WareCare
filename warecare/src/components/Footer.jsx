import Head from "next/head";
import styles from './Footer.module.css';

const Footer = () => {
    return (
    <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <footer className={styles.footer}> 
        <div>
          <p>@2021  Tufts University</p>
          <br />
          <p>
            Tufts Mobile is designed, developed and maintained by Tufts Technology Services (TTS)
          </p>
        </div>       
        </footer>
      </div>
      );
};

export default Footer;


