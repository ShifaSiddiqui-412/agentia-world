"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const pricingPlans = [
  {
    title: "Starter",
    price: "$499/month",
    features: [
      "2 AI Agent Instances",
      "Basic Neural Processing",
      "24/7 Support",
      "Weekly Analytics",
      "Basic Integration Support",
    ],
    bgColor: "bg-white/5",
  },
  {
    title: "Professional",
    price: "$999/month",
    features: [
      "10 AI Agent Instances",
      "Advanced Neural Networks",
      "Priority Support",
      "Real-Time Analytics",
      "Custom Integration",
      "API Access",
      "Advanced Security",
    ],
    bgColor: "bg-gradient-to-r from-purple-600 to-blue-600",
  },
  {
    title: "Enterprise",
    price: "$Custom",
    features: [
      "Unlimited Agents",
      "Full Neural Suite",
      "Dedicated Support Team",
      "Advanced Analytics Dashboard",
      "Custom Development",
      "Full API Access",
      "Enterprise Security",
      "Custom Training",
    ],
    bgColor: "bg-white/5",
  },
];

const FourthCompo = () => {
  return (
    <div id="FourthCompo" className="flex flex-col items-center  bg-black min-h-screen">
      <h1 className="text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Choose Your Plan
      </h1>
      <p className="text-gray-400 mb-8">
        Scale your AI capabilities with our flexible pricing
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className={`${plan.bgColor} p-[50px] rounded-2xl shadow-lg text-white text-center`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold">{plan.title}</h2>
            <p className="text-xl font-bold my-2">{plan.price}</p>
            <ul className="space-y-2 my-4 text-left flex flex-col items-center">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-gray-300 w-full max-w-[250px]"
                >
                  <FaCheck className="text-green-400 shrink-0" />
                  <span className="flex-1">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-4 bg-white/10 px-5 py-2 rounded-lg hover:bg-white/20">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FourthCompo;
