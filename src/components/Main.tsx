import Link from "next/link";
import React from "react";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
                <div>
                    <h1 className="py-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500  to-[#709dff] ">
                        <span>João</span> <span>Gabriel</span>{" "}
                        <span>Schwabe</span>
                    </h1>
                    <h2 className="py-2 text-gray-400">
                        Desenvolvedor Front-End e Back-End
                    </h2>
                    <p className="text-gray-400 py-4 max-w-[70vw] m-auto text-lg">
                        Atualmente estou estudando e desenvolvendo aplicações
                        web com ReactJS e React Native na parte do Front-End, e
                        NodeJS para o Back-End. Buscando sempre aprender e me
                        aperfeiçoar.
                    </p>

                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <a
                            href="https://www.linkedin.com/in/joao-schwabe"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-md shadow-slate-500 p-6 cursor-pointer hover:scale-110 ease-in duration-75">
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a
                            href="https://github.com/joaoschwabe"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-md shadow-slate-500 p-6 cursor-pointer hover:scale-110 ease-in duration-75">
                                <FaGithub />
                            </div>
                        </a>
                        <Link href="/#contact">
                            <div className="rounded-full shadow-md shadow-slate-500 p-6 cursor-pointer hover:scale-110 ease-in duration-75">
                                <AiOutlineMail />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
