import React from 'react';
import './styles.css'

// images
import slimetooth_logo from '../../images/slimetooth_logo'
import holder_img1 from '../../images/holder_img1.png'
import holder_img2 from '../../images/holder_img2.png'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade carousel-dark" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner img-fluid ">
                    <div className="carousel-item active">
                        <img src={slimetooth_logo} className=" m-d-block h-50% w-90%" alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src={holder_img1} className="d-block h-50% w-90%" alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src={holder_img2} className="d-block h-50% w-90%" alt="..." />

                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div id='home-imgs'>

                <div className="card" >
                    <img src={slimetooth_logo} className="card-img-top w-100%" alt="featured item" />
                    <div className="card-body">
                        <p className="card-text">Featured Item of the Week!</p>
                    </div>
                </div>

                <div className="card" >
                    <img src={slimetooth_logo} className="card-img-top w-100%" alt="featured item" />
                    <div className="card-body">
                        <p className="card-text">Featured Item of the Week!</p>
                    </div>
                </div>

                <div className="card" >
                    <img src={slimetooth_logo} className="card-img-top w-100%" alt="featured item" />
                    <div className="card-body">
                        <p className="card-text">Featured Item of the Week!</p>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default Home;
