import './styles.css'

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
    }, []);
}

const Footer = () => {
    return (
        <div id='foot-div'>
            <div id='contact-info'>Contact info</div>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Want some random unsolicited Advice?!</h5>
                    <div id='results'></div>
                    <button onClick={getAdvice} id='getData'>Get Advice</button>
                </div>
            </div>
            <div id='lic-info'><h5>Licensing Info</h5>
            <h6>Copyright 2022 Slimetooth Art, All Righs Reserved</h6>
            <h6>Designed with love by Chris Hues Web Design</h6>
            </div>
        </div>
    );
}

export default Footer;
