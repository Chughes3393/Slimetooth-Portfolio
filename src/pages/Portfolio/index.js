import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <div className="d-flex align-items-start m-5" >

                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                    <button style={{ color: '#FF00DC' }} className="nav-link active" id="v-pills-2018-tab" data-bs-toggle="pill" data-bs-target="#v-pills-2018" type="button" role="tab" aria-controls="v-pills-2018" aria-selected="true">2018</button>

                    <button style={{ color: '#FF00DC' }} className="nav-link" id="v-pills-2019-tab" data-bs-toggle="pill" data-bs-target="#v-pills-2019" type="button" role="tab" aria-controls="v-pills-2019" aria-selected="false">2019</button>

                    <button style={{ color: '#FF00DC' }} className="nav-link" id="v-pills-2020-tab" data-bs-toggle="pill" data-bs-target="#v-pills-2020" type="button" role="tab" aria-controls="v-pills-2020" aria-selected="false">2020</button>

                    <button style={{ color: '#FF00DC' }} className="nav-link" id="v-pills-2021-tab" data-bs-toggle="pill" data-bs-target="#v-pills-2021" type="button" role="tab" aria-controls="v-pills-2021" aria-selected="false">2021</button>

                    <button style={{ color: '#FF00DC' }} className="nav-link" id="v-pills-2022-tab" data-bs-toggle="pill" data-bs-target="#v-pills-2022" type="button" role="tab" aria-controls="v-pills-2022" aria-selected="false">2022</button>

                </div>

                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-2018" role="tabpanel" aria-labelledby="v-pills-2018-tab">

                        2018

                    </div>

                    <div className="tab-pane fade" id="v-pills-2019" role="tabpanel" aria-labelledby="v-pills-2019-tab">

                        2019

                    </div>

                    <div className="tab-pane fade" id="v-pills-2020" role="tabpanel" aria-labelledby="v-pills-2020-tab">

                        2020

                    </div>

                    <div className="tab-pane fade" id="v-pills-2021" role="tabpanel" aria-labelledby="v-pills-2021-tab">

                        2021

                    </div>

                    <div className="tab-pane fade" id="v-pills-2022" role="tabpanel" aria-labelledby="v-pills-2022-tab">

                        2022

                    </div>

                </div>
            </div>
        </div>

    );
}

export default Portfolio;
