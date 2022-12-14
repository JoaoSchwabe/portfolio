import Head from "next/head";
import Contato from "../components/Contato";
import Habilidades from "../components/Habilidades";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projetos from "../components/Projetos";
import Sobre from "../components/Sobre";

export default function Home() {
    return (
        <div>
            <Head>
                <title>João - Desenvolvedor Web</title>
                <meta
                    name="description"
                    content="Desenvolvedor web front-end com React e Next.js e desenvolvedor mobile com React Native e Expo, backend com NodeJS."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Main />
            <Sobre />
            <Habilidades />
            <Projetos />
            <Contato />
        </div>
    );
}
