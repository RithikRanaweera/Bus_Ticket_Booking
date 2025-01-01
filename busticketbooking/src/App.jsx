import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Footer from "./components/footer/Footer"
import Ticket from "./pages/ticket/Ticket"
import Detail from "./pages/ticket/detail/Detail"

function App() {
  return (
    <>
      <Router>
        <main className="flex flex-col w-full min-h-screen gap-12 bg-neutral-50">
          {/*Navbar */}
          <Navbar/>

          {/* Routing */}
          <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/about" element={<About/>} /> 
            <Route path="/bus-tickets" element={<Ticket/>}/>

            {/* Ticket detail */}
            <Route path="/bus-tickets/detail" element={<Detail/>}/>
          </Routes> 

          {/* Footer */}
          <Footer/>
   
        </main>
      </Router>
    </>
  )
}

export default App
