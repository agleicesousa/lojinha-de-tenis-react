import { FaSearch } from "react-icons/fa"
import React from "react"

export default function Store() {

    const { id } = useParams();
    const tenis = tenis.find(tenis => tenis.id === Number(id));
    const listaTenis = tenis.filter(tenis => tenis.id !== Number(id));

    return (
        <div className="h-screen flex flex-col w-screen bg-gray-100">
            <div>
                <nav className="w-full bg-sky-700 shadow-md p-4 flex justify-around items-center">
                    <div className="flex items-center gap-5 cursor-pointer">
                        <img src="https://via.placeholder.com/32" alt="Logo" />
                        <h1 className="text-white font-bold">Loja de Tênis</h1>
                    </div>
                    <div className="flex bg-white items-center">
                        <input type="text" placeholder="Buscar" className="outline-transparent" />
                        <button><FaSearch /></button>
                    </div>
                </nav>
            </div>
        </div>
    )
}