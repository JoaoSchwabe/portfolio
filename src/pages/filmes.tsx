import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

import filmes from "../../public/assets/projetos/filmes.jpg";

const Filmes = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    style={{ objectFit: "contain" }}
                    src={filmes}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Filmes App</h2>
                    <h3>React JS / API de Filmes</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Projeto</p>
                    <h3 className="text-xl">Resumo</h3>
                    <p>
                        Esse site foi desenvolvido em ReactJS e TypeScript
                        utilizando a API de filmes TheMovieDB. O site é
                        responsivo e possui um layout simples e intuitivo.
                    </p>
                    <a
                        href="https://github.com/joaoschwabe/site_filme"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 mr-8">Código</button>
                    </a>
                    <a
                        href="https://sitefilmesapi.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4">Demonstração</button>
                    </a>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-md shadow-slate-500 rounded-xl py-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">
                            Tecnologias
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> React
                            </p>

                            <p className="py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />{" "}
                                Typescript
                            </p>
                            <p className="py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Firebase
                            </p>
                            <p className="py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> IMDB API
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/#projetos">
                    <p className="underline cursor-pointer">Voltar</p>
                </Link>
            </div>
        </div>
    );
};

export default Filmes;
