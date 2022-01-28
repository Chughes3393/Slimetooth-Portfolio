import React from 'react'

function getAdvice() {

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
  return (
    <div className="App">

      <div id='results'></div>
      <button onClick={getAdvice} id='getData'>Get Advice</button>

    </div>
  );
}

export default App;
