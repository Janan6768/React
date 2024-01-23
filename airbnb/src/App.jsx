import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Card } from "./components/Card"


function App() {
  
  return (
    <>
    <Navbar/>
    <Hero/>
    <div style={{ display: 'flex', gap: '100px',marginLeft:'85px' }}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    </>
  )
}

export default App
