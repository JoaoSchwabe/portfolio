import React from "react";
import ProjectItem from "./ProjectItem";
import filmes from "../../public/assets/projetos/filmes.jpg";
import pizza from "../../public/assets/projetos/pizza.jpg";
import todo from "../../public/assets/projetos/todo2.jpg";
import alftchild from "../../public/assets/projetos/alfbt-child2.jpg";

const Projetos = () => {
    return (
        <div id="projetos" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Projetos
                </p>
                <h2 className="py-4">O que eu fiz</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem
                        titulo="Filmes API"
                        backgroundImg={filmes}
                        tech="React JS"
                        url="/filmes"
                    />
                    <ProjectItem
                        titulo="Pizzaria"
                        backgroundImg={pizza}
                        tech="React JS, NodeJS, TailwindCSS"
                        url="/pizzaria"
                    />
                    <ProjectItem
                        titulo="TODO App"
                        backgroundImg={todo}
                        tech="React Native, Expo"
                        url="/todo"
                    />
                    <ProjectItem
                        titulo="ALFBT Child"
                        backgroundImg={alftchild}
                        tech="React Native"
                        url="/alfbt-child"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projetos;
