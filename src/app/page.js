'use client'
import Image from "next/image";
import styles from "./page.module.css";
import ReactGA from "react-ga";
import { GoogleAnalytics } from '@next/third-parties/google'
import { useEffect } from "react";
ReactGA.initialize("G-3W9PQ6L68X");

export default function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <main className={styles.main}>
       <GoogleAnalytics gaId="G-3W9PQ6L68X" />
      <div className={styles.description}>hello this is my new app</div>
    </main>
  );
}
