import { BrowserRouter } from "react-router-dom"
import { Navbar } from "@/components/layout/Navbar"
import { HeroSection } from "@/components/landing/HeroSection"


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <HeroSection />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App