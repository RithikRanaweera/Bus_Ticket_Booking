import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <>
      <Router>
        <main className="w-full flex flex-col  bg-neutral-50 min-h-screen">
          {/*Navbar */}
          <Navbar/>

          {/* Routing */}
          {/* <Routes>
            <Route path="/" element={<div>Home</div>} />
          </Routes> */}

          {/* Footer */}
          Footer
        </main>
      </Router>
    </>
  )
}

export default App
