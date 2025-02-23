import { RiRobot2Line } from "react-icons/ri";
import React from 'react';
import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-transparent backdrop-blur fixed z-50  w-full shadow-md shadow-purple-400/50 p-5 flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex items-center">
                <RiRobot2Line className="text-purple-500 text-xl" />
                <span className="ml-2 text-xl font-bold text-white">AgentiaWorld</span>
            </div>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link href="#Neural" className="mr-5 text-slate-300 hover:text-white">Features</Link>
                <Link href="#Powered" className="mr-5 text-slate-300 hover:text-white">Technology</Link>
                <Link href="#ThirdCompo" className="mr-5 text-slate-300 hover:text-white">Agents</Link>
                <Link href="#FourthCompo" className="mr-5 text-slate-300 hover:text-white">Pricing</Link>
                <Link href="#Contact" className="mr-5 text-slate-300 hover:text-white">Contact</Link>
            </nav>
            <div className="mt-4 md:mt-0">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300">
                    Launch Console
                </button>
            </div>
        </div>
    )
}