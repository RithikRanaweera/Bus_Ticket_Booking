import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Footer from "./components/footer/Footer"
import Ticket from "./pages/ticket/Ticket"
import Detail from "./pages/ticket/detail/Detail"
import { useState } from "react"
import LoginPopup from "./components/loginpopup/LoginPopup"
import Checkout from "./pages/ticket/checkout/Checkout"

function App() {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Router>
        <main className="flex flex-col w-full min-h-screen gap-12 bg-neutral-50">
          {/*Navbar */}
          <Navbar setShowLogin = {setShowLogin} />

          {/* Routing */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bus-tickets" element={<Ticket />} />
            <Route path="/bus-tickets/checkout" element={<Checkout />} />


            {/* Ticket detail */}
            <Route path="/bus-tickets/detail" element={<Detail />} />
          </Routes>

          {/* Footer */}
          <Footer />

        </main>
      </Router>
    </>
  )
}

export default App
