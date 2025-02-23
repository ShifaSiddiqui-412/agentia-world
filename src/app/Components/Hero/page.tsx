"use client";

import React, { useState, useEffect } from 'react';
import { FaGreaterThan } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";

export default function Hero() {
  return (
    <div className="bg-black">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-black to-[#12001b]">
        <div className="text-[#12001b] rounded-2xl text-sm h-[35px] w-[250px] text-center py-2 text-purple-500 bg-slate-800/90">POWERED BY PANAVERSITY</div>
        <h1 className="text-[70px] font-bold mb-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Enterprise AI Agents
        </h1>
        <h1 className="text-[70px] font-bold text-white ">for the Future</h1>
        <div className="flex w-[700px] h-[100px] rounded-xl bg-white/5 border-2 border-purple-700 mb-6 pt-4 ">
          <div className=" text-white text-[30px] w-[40px] h-[40px] rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 ml-5 mt-2"><RiRobot2Line className="pt-2 pl-2" /></div>
          <div className="mb-[35px] mt-1 ml-4 text-white w-[600px] h-[50px] bg-white/5 rounded-xl px-4 py-2">
            {(() => {
              const [text, setText] = useState('');
              const [index, setIndex] = useState(0);
              const [charIndex, setCharIndex] = useState(0);

              const texts = [
                'Hello! I am your AI Agent. How can I enhance your business.',
                'Let me assist you with advanced Data Analystics. ',
                'Would you like to explore our AI Integeration Solution?',
                'I can help optimize your workflows with neural network',
                'Hello! I am your AI agent. How can I enhance your business',
              ];

              useEffect(() => {
                const currentText = texts[index];

                if (charIndex < currentText.length) {
                  const typingTimeout = setTimeout(() => {
                    setText((prev) => prev + currentText[charIndex]);
                    setCharIndex((prev) => prev + 1);
                  }, 100);
                  return () => clearTimeout(typingTimeout);
                } else {
                  setTimeout(() => {
                    const eraseInterval = setInterval(() => {
                      setText((prev) => {
                        if (prev.length > 0) {
                          return prev.slice(0, -1);
                        } else {
                          clearInterval(eraseInterval);
                          setIndex((prev) => (prev + 1) % texts.length);
                          setCharIndex(0);
                          return '';
                        }
                      });
                    }, 50);
                  }, 1000);
                }
              }, [charIndex, index]);

              return <span className="text-xl">{text}</span>;
            })()}
          </div>
        </div>
        <div className="text-center">
          <div className="flex space-x-4">
            <button className=" flex px-6 py-3 w-[280px] h-[60px] font-bold  text-[20px] bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg  hover:shadow-lg hover:shadow-purple-500/50 hover:from-blue-600 hover:to-purple-600 transition duration-300">
              Deploy your AI Agent <FaGreaterThan className="px-2 text-[30px]" />
            </button>
            <button className="px-2 py-3  w-[180px] h-[60px] font-bold text-[20px] text-white border-2 border-gray-300 rounded-lg hover:shadow-lg hover:shadow-purple-500/50  transition duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}