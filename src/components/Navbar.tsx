import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { useRouter } from 'next/router';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState("#1f2937");
    const [linkColor, setLinkColor] = useState("#ecf0f3");

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener("scroll", handleShadow);
    }, []);

    return (
        <div
            style={{ backgroundColor: `${navBg}` }}
            className={
                shadow
                    ? "fixed w-full h-20 shadow-lg shadow-slate-700 z-[100] ease-in-out duration-300"
                    : "fixed w-full h-20 z-[100]"
            }
        >
            <div className="flex justify-end items-center w-full h-full px-2 2xl:px-16">
                <div>
                    <ul
                        style={{ color: `${linkColor}` }}
                        className="hidden md:flex"
                    >
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/#sobre">Sobre</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/#habilidades">Habilidades</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/#projetos">Projetos</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/#contact">Contato</Link>
                        </li>
                    </ul>
                    {/* Hamburger Icon */}
                    <div
                        style={{ color: `${linkColor}` }}
                        onClick={handleNav}
                        className="md:hidden"
                    >
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {/* Overlay */}
            <div
                className={
                    nav
                        ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                        : ""
                }
            >
                <div
                    className={
                        nav
                            ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#1f2937] p-10 ease-in duration-500"
                            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                    }
                >
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <div
                                onClick={handleNav}
                                className="rounded-full shadow-lg shadow-slate-500 p-3 cursor-pointer"
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4 text-center">
                                João Gabriel Schwabe
                            </p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    Home
                                </li>
                            </Link>
                            <Link href="/#sobre">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    Sobre
                                </li>
                            </Link>
                            <Link href="/#habilidades">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    Habilidades
                                </li>
                            </Link>
                            <Link href="/#projetos">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    Projetos
                                </li>
                            </Link>

                            <Link href="/#contact">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    Contato
                                </li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <a
                                    href="https://www.linkedin.com/in/joao-schwabe"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="rounded-full shadow-lg shadow-slate-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a
                                    href="https://github.com/JoaoSchwabe"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="rounded-full shadow-lg shadow-slate-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaGithub />
                                    </div>
                                </a>
                                <Link href="/#contact">
                                    <div
                                        onClick={() => setNav(!nav)}
                                        className="rounded-full shadow-lg shadow-slate-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                                    >
                                        <AiOutlineMail />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
