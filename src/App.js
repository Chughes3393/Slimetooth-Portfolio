
import { Routes, Route } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'

//components
import Nav from './components/Nav'
import Footer from './components/Footer/Footer.js'
import Header from './components/Header/Header.js'

// pages
import Home from './pages/Home/'
import Portfolio from './pages/Portfolio'
import Login from './pages/Login'

// context
import UserContext from './Contexts/UserContext'

// css
import './App.css'

function getAdvice() {

  // https://www.ostoncodecypher.com/details?id=158&title=display_random_advice_on_your__website_or__web_app_using_advice_slip_json_api

  const resDiv = document.querySelector('#results');
  const resBtn = document.querySelector('#getData');

  fetch('	https://api.adviceslip.com/advice')
    .then(response => { return response.json(); })
    .then(adviceData => {
      const Adviceobj = adviceData.slip;
      resDiv.innerHTML = `<p>${Adviceobj.advice}</p>`;
    }).catch(error => { console.log(error); });

  resBtn.addEventListener('click', () => {
    getAdvice();
  });

  window.onload = () => {
    getAdvice();
  };
}

function App() {
  const [user, setUser] = useState('')
  return (
    <div className="App">

      <div id='results'></div>
      <button onClick={getAdvice} id='getData'>Get Advice</button>

      <UserContext.Provider value={user}>



        <Header />
        <Nav />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='portfolio' element={<Portfolio />} />

        </Routes>


        <Footer />

      </UserContext.Provider>

    </div>
  );
}

export default App;
