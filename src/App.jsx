import Navbar from "#components/Navbar"
import Welcome from "#components/Welcome"
import Dock from "#components/Dock"
import Draggable from "gsap/Draggable"
import gsap from "gsap"
import Safari from "#windows/Safari"
import Resume from "#windows/Resume"
import Finder from "#windows/Finder"
import Text from "#windows/Text"
import Image from "#windows/Image"
import Contact from "#windows/Contact"
import Home from "#components/Home"
import Photos from "#windows/Photos"
import TerminalWindow from "#windows/Terminal"


gsap.registerPlugin(Draggable)

function App() {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>

      <TerminalWindow/>
      <Safari />
      <Resume/>
      <Finder/>
      <Text/>
      <Image />
      <Contact/>
      <Home/>
      <Photos/>
    </main>
  )
}

export default App
