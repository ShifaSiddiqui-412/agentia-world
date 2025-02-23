"use client";

import { motion } from "framer-motion";
import { LuBrain } from "react-icons/lu";
import { FaRegMessage } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import { MdOutlineShield } from "react-icons/md";

const cards = [
  {
    title: "Autonomous Learning",
    description: "Self-evolving neural networks that continously adapt to your business needs through reinforcement learning ",
    icon: <LuBrain size={37} />,
  },
  {
    title: "Multi-Model Intelligence",
    description: "Advanced agents capable of processing text,voice and visual data for comprehensive understanding",
    icon: <FaRegMessage size={37} />,
  },
  {
    title: "Congnitive Integration",
    description: "Seamless integration with existing systems through advanced cognitive APIs and neural bridges",
    icon: <GoDash size={37} />,
  },
  {
    title: "Ethical AI Framework",
    description: "Built-in ethical guideline and safety protocols ensuring responsible AI deployment",
    icon: <MdOutlineShield size={37} />,
  },
];

const Neural = () => {
  return (
    <div id="Neural" className="p-10 bg-black">
      <h1 className="text-[60px] text-center font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        Neural Capabilities
      </h1>
      <h2 className="text-[20px] text-white text-center mb-4">Powered by next-generation artificial intelligence</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white/5 hover:border-purple-700 shadow-lg rounded-2xl overflow-hidden relative group cursor-pointer p-6 flex flex-col "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 border-2 border-purple-500 rounded-2xl"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: index * 1.5 }}
            />
            <span className="text-white px-2 py-2 items-center rounded-xl h-[48px] w-[48px] bg-gradient-to-r from-blue-600 to-purple-600 mb-4 inline-flex">
              {card.icon}
            </span>
            <h3 className="text-lg text-white ">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Neural;
