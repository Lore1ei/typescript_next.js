import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Inter} from "next/font/google";
import Head from "next/head";
import {Container} from "react-bootstrap";
import styles from "@/styles/App.module.css";
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "@/components/NavBar";
import NextNProgress from "nextjs-progressbar";

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className={inter.className}>
          <Head>
              <title>Next js news app</title>
              <meta name="keywords" content="JavaScript" />
              <meta name="description" content="Next js news" />
          </Head>
          <NextNProgress />
          <NavBar />
          <Container className={styles.pageContainer}>
              <Component {...pageProps} />
          </Container>
      </div>
  )
}
