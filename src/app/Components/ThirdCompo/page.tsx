"use client";

import { motion } from "framer-motion";
import { LuBrain } from "react-icons/lu";
import { TbLayoutList } from "react-icons/tb";
import { MdOutlineShield } from "react-icons/md";

const cards = [
  {
    title: "Enterprise AI",
    description: "Custom AI agents designed for enterprise-scale operations and decision-making",
    icon: <LuBrain size={39} />,
  },
  {
    title: "Neural Operations",
    description: "Automated workflow optimization through distributed neural networks",
    icon: < TbLayoutList size={39} />,
  },
  {
    title: "Secure Intelligence",
    description: "Privacy-first AI solutions with military-grade security protocols",
    icon: <MdOutlineShield size={39} />,
  },
];

const ThirdCompo = () => {
  return (
    <div id="ThirdCompo" className="bg-black flex flex-col items-center py-10  mb-7">
      <h1 className="text-[60px] text-center font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        AI Solutions
      </h1>
      <h2 className="text-[20px] text-white text-center mb-4">Transforming industries with intelligent Agents</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto justify-center">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white/5  hover:border-2 hover:border-purple-700 shadow-lg rounded-2xl overflow-hidden relative group cursor-pointer p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >


            <span className="text-white px-2 py-2 text-center rounded-xl h-[48px] w-[48px] bg-gradient-to-r from-blue-600 to-purple-600 mb-4 inline-flex">
              {card.icon}
            </span>
            <h3 className="text-lg text-white">{card.title}</h3>
            <p className="text-gray-400">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThirdCompo;
