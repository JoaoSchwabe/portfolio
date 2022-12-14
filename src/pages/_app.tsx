import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={montserrat.className}>
            <Toaster position="bottom-right" />
            <Component {...pageProps} />
        </main>
    );
}
