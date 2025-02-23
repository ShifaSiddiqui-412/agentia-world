import { FaEnvelope, FaGlobe, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div id="Contact" className="flex flex-col items-center bg-black min-h-screen p-6 md:p-12">
      {/* Heading Section */}
      <h1 className="text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Get In Touch
      </h1>
      <p className="text-gray-400 mb-4">
        Ready to transform your business with AI?
      </p>

      {/* Contact Section */}
      <div className="flex flex-col items-center md:flex-row w-full max-w-6xl bg-black pb-9">

        {/* Left Side - Contact Info */}
        <div className="md:w-1/2 bg-black p-6 md:p-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>

          <div className="flex items-center gap-3 mb-3 text-white">
            <FaEnvelope className="text-purple-500" />
            <a href="mailto:contact@agentiaworld.com" className="hover:underline">contact@agentiaworld.com</a>
          </div>
          <div className="flex items-center gap-3 mb-4 text-white">
            <FaGlobe className="text-purple-500" />
            <a href="https://www.agentiaAI.com" target="_blank" className="hover:underline">www.agentiaAI.com</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-3 text-gray-600">
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

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 bg-black md:p-10 mt-6 md:mt-0 md:ml-6">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="p-4 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-purple-600 bg-white/5" />
              <input type="text" placeholder="Last Name" className="p-4 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-purple-600 bg-white/5" />
            </div>

            <input type="email" placeholder="Email Address" className="mt-6 p-4 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-purple-600 bg-white/5" />
            <textarea placeholder="Your Message" className="mt-6 p-4 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-purple-600 bg-white/5" rows={4}></textarea>

            <button className="mt-6 w-full py-4 text-white font-bold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
