import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import PortfolioCard from './components/PortfolioCard'

// import './App.css'

// functional component
function App() {
  let user = {
    name: "Auzan"
  }

  return (
    <div>
      <Navbar user={user} />
      <Hero />

      <div>
        <PortfolioCard title="Digimon App" />
        <PortfolioCard title="E-commerce App" />
        <PortfolioCard title="Dashboard admin App"/>
      </div>

      <Footer />
    </div>
  )
}

export default App
