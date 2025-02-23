
import Contact from "./Components/Contact/page"
import FourthCompo from "./Components/FourthCompo/page"
import Hero from "./Components/Hero/page"
import Neural from "./Components/Neural/page"
import Powered from "./Components/Powered/page"
import ThirdCompo from "./Components/ThirdCompo/page"


export default function home() {
  return (
    <div className="bg-black">
      <Hero />
      <Powered />
      <Neural />
      <ThirdCompo />
      <FourthCompo />
      <Contact />
    </div>
  )
}