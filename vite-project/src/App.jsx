import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
function App() {
  

  return (
    <>
      <Navbar/>
      <div className="card">
        <Card title="card 1" descripion="des card1"/>
        <Card title="card 2" descripion="des card2"/> 
        <Card title="card 3" descripion="des card3"/>
        <Card title="card 4" descripion="des card4"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
