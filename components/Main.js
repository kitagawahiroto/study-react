import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Links } from "../components/Links";
import {Headline} from "../components/Headline";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export  function Main(props) {
  return (
        <main className={styles.main}>
          <Headline page={props.page}>
            code={<code className={styles.code}>pages/{props.page}.js</code>}
          </Headline>
          <Links />
        </main>
        
      
    
  );
}
