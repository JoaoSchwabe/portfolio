import Image from "next/image";
import React from "react";

import html from "../../public/assets/skills/html.png";
import css from "../../public/assets/skills/css.png";
import js from "../../public/assets/skills/javascript.png";
import ts from "../../public/assets/skills/typescript.png";
import react from "../../public/assets/skills/react.png";
import tailwind from "../../public/assets/skills/tailwind.png";
import nextjs from "../../public/assets/skills/nextjs.png";
import nodejs from "../../public/assets/skills/node.png";

const Habilidades = () => {
    return (
        <div className="w-full lg:h-screen p-2" id="habilidades">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Habilidades
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-75">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={html}
                                    width={64}
                                    height={64}
                                    alt="html"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-75">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={css}
                                    width={64}
                                    height={64}
                                    alt="css"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-75">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={js}
                                    width={64}
                                    height={64}
                                    alt="js"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-75">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={ts}
                                    width={64}
                                    height={64}
                                    alt="ts"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>TypeScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-75">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={react}
                                    width={64}
                                    height={64}
                                    alt="react"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-75">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={nextjs}
                                    width={64}
                                    height={64}
                                    alt="nextjs"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>NextJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-75">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={nodejs}
                                    width={64}
                                    height={64}
                                    alt="nodejs"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>NodeJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-75">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={tailwind}
                                    width={64}
                                    height={64}
                                    alt="tailwindcss"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>TailwindCSS</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Habilidades;
