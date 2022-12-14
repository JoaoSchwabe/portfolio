import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { sendContactMail } from "../services/sendMail";

export default function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [assunto, setAssunto] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!nome.trim() || !email.trim() || !mensagem.trim()) {
            toast("Preencha todos os campos para enviar sua mensagem!", {
                style: {
                    color: "#fff",
                },
            });
            return;
        }

        try {
            await sendContactMail(nome, email, assunto, mensagem);
            setNome("");
            setEmail("");
            setAssunto("");
            setMensagem("");

            toast("Mensagem enviada com sucesso!");
        } catch (error) {
            toast(
                "Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!"
            );
        }
    };

    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Contato
                </p>
                <h2 className="py-4">Fale comigo</h2>
                {/* right */}
                <div className="col-span-3 w-full h-auto shadow-md shadow-slate-700 rounded-xl lg:p-4">
                    <div className="p-4">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">
                                        Nome
                                    </label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-slate-900 bg-slate-500"
                                        type="text"
                                        name="name"
                                        value={nome}
                                        onChange={(e) =>
                                            setNome(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col ">
                                    <label className="uppercase text-sm py-2">
                                        Email
                                    </label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-slate-900 bg-slate-500"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">
                                    Assunto
                                </label>
                                <input
                                    className="border-2 rounded-lg p-3 flex border-slate-900 bg-slate-500"
                                    type="text"
                                    name="subject"
                                    value={assunto}
                                    onChange={(e) => setAssunto(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">
                                    Mensagem
                                </label>
                                <textarea
                                    className="border-2 rounded-lg p-3 border-slate-900 bg-slate-500"
                                    rows={10}
                                    name="message"
                                    value={mensagem}
                                    onChange={(e) =>
                                        setMensagem(e.target.value)
                                    }
                                ></textarea>
                            </div>
                            <button className="w-full p-4 text-gray-100 mt-4">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-12">
                <Link
                    href="/"
                    className="rounded-full shadow-md shadow-slate-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                >
                    <HiOutlineChevronDoubleUp
                        className="text-[#5651e5]"
                        size={30}
                    />
                </Link>
            </div>
        </div>
    );
}
