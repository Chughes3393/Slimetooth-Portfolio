
import { Routes, Route } from 'react-router-dom'
import { useState, useContext } from 'react'

//components
import Nav from './components/Nav'
import Footer from './components/Footer/Footer.js'
import Header from './components/Header/Header.js'

// pages
import Home from './pages/Home/'
import Portfolio from './pages/Portfolio'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Shop from './pages/Shop'

// context
import UserContext from './Contexts/UserContext'

// css
import './App.css'



function App() {
  const [user, setUser] = useState('')
  return (
    <div className="App">

      <UserContext.Provider value={user}>

        <Header />
        <Nav />
        <Routes>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='shop' element={<Shop />} />

        </Routes>

        <Footer />

      </UserContext.Provider>

    </div>
  );
}

export default App;
