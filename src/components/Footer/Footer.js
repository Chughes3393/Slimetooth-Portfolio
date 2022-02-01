import './styles.css'
import tiktoklogo from '../../images/tiktoklogo.png'

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
            <div id='contact-info'><h4>Contact info</h4>
                <a href="https://www.facebook.com/Slimetooth-art-156695032840521/?ref=py_c" className="fa fa-facebook"></a>

                <a href="https://twitter.com/slimetooth_art" className="fa fa-twitter"></a>

                <a href='https://www.tiktok.com/@slimetoothart' ><img src={tiktoklogo} alt='tik tok logo' className="fa fa-tiktok" /></a>

                <a href="#" className="fa fa-google"></a>

                <a href="https://www.instagram.com/slimetooth.art/?hl=en" className="fa fa-instagram" ></a>

            </div>
            <div id='ab-section'>
                <p><strong>Slimetooth Art is based in Massachusetts and is inspired by slime (obvs!), the colors lime green and bright pink, bones, nature, animals, cuteness, Halloween, cemetaries, cartoons, music, baked treats and sweets, candy, sanrio, aliens, the future, the past, ghosts, gremlins, goblins and more!</strong></p>
                <p><strong>Materials most often used include: acrylic paint, polymer clay, glass beads, rhinestones, natural stones, silicon, markers, and love.</strong>
                </p>
                <p><strong>Commisions for drawings, paintings, and decoden phone cases are available. To inquire about pricing and details email: slimetooth.art@gmail.com</strong></p>
                </div>
            <div id='api-card'className="card" >
                <div className="card-body">
                    <h5 className="card-title">Want some random unsolicited Advice?!</h5>
                    <div id='results'></div>
                    <button onClick={getAdvice} id='getData'>Get Advice</button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
