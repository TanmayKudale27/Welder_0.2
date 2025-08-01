import React from 'react'
import TopBar from './components/TopBar.jsx'
import NavBar from './components/NavBar.jsx'
import HeaderCarousel from './pages/HeaderCarousel.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <>
      <TopBar/>
      <NavBar/>
      <HeaderCarousel/>
      <About/>
    </>
  )
}

export default App