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
            <Navbar />
            <Main />
            <Sobre />
            <Habilidades />
            <Projetos />
            <Contato />
        </div>
    );
}
