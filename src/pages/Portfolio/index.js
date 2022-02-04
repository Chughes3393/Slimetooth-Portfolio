import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <div className="d-flex align-items-start m-5" >

                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                    <button style={{ color: '#FF00DC' }} className="nav-link active" id="v-pills-shop-tab" data-bs-toggle="pill" data-bs-target="#v-pills-shop" type="button" role="tab" aria-controls="v-pills-shop" aria-selected="true">Shop</button>

                    <button style={{ color: '#FF00DC' }} className="nav-link" id="v-pills-jewelry-tab" data-bs-toggle="pill" data-bs-target="#v-pills-jewelry" type="button" role="tab" aria-controls="v-pills-jewelry" aria-selected="false">Jewelry</button>

                    <button style={{ color: '#FF00DC' }} className="nav-link" id="v-pills-accessories-tab" data-bs-toggle="pill" data-bs-target="#v-pills-accessories" type="button" role="tab" aria-controls="v-pills-accessories" aria-selected="false">Accessories</button>

                    <button style={{ color: '#FF00DC' }} className="nav-link" id="v-pills-prints-tab" data-bs-toggle="pill" data-bs-target="#v-pills-prints" type="button" role="tab" aria-controls="v-pills-prints" aria-selected="false">Prints</button>

                    <button style={{ color: '#FF00DC' }} className="nav-link" id="v-pills-odds-tab" data-bs-toggle="pill" data-bs-target="#v-pills-odds" type="button" role="tab" aria-controls="v-pills-odds" aria-selected="false">Odds & Ends</button>

                </div>

                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-shop" role="tabpanel" aria-labelledby="v-pills-shop-tab">

                        Shop

                    </div>

                    <div className="tab-pane fade" id="v-pills-jewelry" role="tabpanel" aria-labelledby="v-pills-jewelry-tab">

                        Jewelry

                    </div>

                    <div className="tab-pane fade" id="v-pills-accessories" role="tabpanel" aria-labelledby="v-pills-accessories-tab">

                        Accessories

                    </div>

                    <div className="tab-pane fade" id="v-pills-prints" role="tabpanel" aria-labelledby="v-pills-prints-tab">

                        Prints

                    </div>

                    <div className="tab-pane fade" id="v-pills-odds" role="tabpanel" aria-labelledby="v-pills-odds-tab">

                        Odds & Ends

                    </div>

                </div>
            </div>
        </div>

    );
}

export default Portfolio;
