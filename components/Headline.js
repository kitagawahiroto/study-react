import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function Headline(props) {
  return (
      <div>
      <h1 className={styles.title}>{props.page} page</h1>
      
      <p className={styles.description}>
        Get started by edting {props.children}
      </p>

       

    </div>
  );
}
