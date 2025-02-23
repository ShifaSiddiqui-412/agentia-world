import { RiRobot2Line } from "react-icons/ri";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="w-full h-[2px] bg-gray-700"></div>
      <footer className="bg-black text-gray-400">
        <div className="container px-5 py-16 mx-auto flex flex-col md:flex-row justify-between items-start">
          {/* Left Side: Logo and Description */}
          <div className="w-64 flex-shrink-0 text-left">
            <a className="flex items-center text-purple-700">
              <RiRobot2Line className="text-2xl" />
              <span className="ml-3 text-xl text-white font-semibold">AgentiaWorld</span>
            </a>
            <p className="mt-2 text-sm">
              Next-generation AI agents powering the future of enterprise intelligence.
            </p>
            <div className="flex gap-4 mt-3">
              <a href="https://www.github.com" target="_blank">
                <FaGithub className="text-2xl hover:text-gray-400 transition" />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <FaLinkedin className="text-2xl hover:text-blue-600 transition" />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <FaTwitter className="text-2xl hover:text-blue-400 transition" />
              </a>
            </div>
          </div>

          {/* Right Side: Links Sections */}
          <div className="flex flex-grow justify-center gap-8">
            {/* Product */}
            <div className="w-1/3 md:w-auto px-4 text-center md:text-left">
              <h2 className="font-semibold text-white text-lg mb-3">Product</h2>
              <nav className="list-none space-y-2">
                <li><a className="hover:text-white cursor-pointer">Features</a></li>
                <li><a className="hover:text-white cursor-pointer">Pricing</a></li>
                <li><a className="hover:text-white cursor-pointer">Documentation</a></li>
                <li><a className="hover:text-white cursor-pointer">API</a></li>
              </nav>
            </div>

            {/* Company */}
            <div className="w-1/3 md:w-auto px-4 text-center md:text-left">
              <h2 className="font-semibold text-white text-lg mb-3">Company</h2>
              <nav className="list-none space-y-2">
                <li><a className="hover:text-white cursor-pointer">About</a></li>
                <li><a className="hover:text-white cursor-pointer">Blog</a></li>
                <li><a className="hover:text-white cursor-pointer">Career</a></li>
                <li><a className="hover:text-white cursor-pointer">Contact</a></li>
              </nav>
            </div>

            {/* Legal */}
            <div className="w-1/3 md:w-auto px-4 text-center md:text-left">
              <h2 className="font-semibold text-white text-lg mb-3">Legal</h2>
              <nav className="list-none space-y-2">
                <li><a className="hover:text-white cursor-pointer">Privacy</a></li>
                <li><a className="hover:text-white cursor-pointer">Terms</a></li>
                <li><a className="hover:text-white cursor-pointer">Security</a></li>
                <li><a className="hover:text-white cursor-pointer">Compliance</a></li>
              </nav>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-700"></div>
        {/* Copyright Section */}
        <div className="bg-black py-4 text-center items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Agentia World. Powered by Panaversity. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
