'use client'
import Image from "next/image";
import styles from "./page.module.css";
import ReactGA from "react-ga";

import { useEffect } from "react";
ReactGA.initialize("UA-000000-01");

export default function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.description}>hello this is my app</div>
    </main>
  );
}
