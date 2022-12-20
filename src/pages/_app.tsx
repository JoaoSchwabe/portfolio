import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const montserrat = Montserrat();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>João - Desenvolvedor Web</title>
                <meta
                    name="description"
                    content="Desenvolvedor web front-end com React e Next.js e desenvolvedor mobile com React Native e Expo, backend com NodeJS."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={montserrat.className}>
                <Toaster position="bottom-right" />
                <Component {...pageProps} />
            </main>
        </>
    );
}
