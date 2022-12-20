import React from "react";
import Link from "next/link";
const Sobre = () => {
    return (
        <div
            id="sobre"
            className="w-full md:h-screen p-2 flex items-center py-16"
        >
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5]">
                        Sobre
                    </p>
                    <p className="py-2 text-gray-400">
                        Estou me especializando em desenvolvimento web front-end
                        com React e Next.js e no desenvolvimento mobile com
                        React Native. Sempre buscando mais conhecimento e
                        aprendizado.
                    </p>
                    <p className="py-2 text-gray-400 ">
                        Comecei a estudar programação em 2020, onde conheci
                        Python, em 2021 comecei a estudar HTML, CSS e
                        JavaScript. Em 2022 comecei a estudar React e Next.js e
                        React Native.
                    </p>
                    <Link href="/#projetos">
                        <p className="py-2 text-gray-500 underline cursor-pointer">
                            Veja alguns dos meus projetos
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sobre;
