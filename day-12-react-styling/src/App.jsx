import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer'
import PortfolioCard from './components/PortfolioCard'
import CardList from './components/CardList'

// import './App.css'
import styles from "./components/Hero/Hero.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ExampleCarousel from './components/Carousel'

// functional component
function App() {
  let user = {
    name: "Auzan"
  }

  return (
    <div>
      <Navbar user={user} />
      <ExampleCarousel />
      <Hero />

      <CardList />

      <div className={styles.hero}>
        <PortfolioCard title="Digimon App" />
        <PortfolioCard title="E-commerce App" />
        <PortfolioCard title="Dashboard admin App"/>
      </div>

      

      <Footer />
    </div>
  )
}

export default App
