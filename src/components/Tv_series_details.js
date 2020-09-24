import React, { Component } from 'react';

class Tv_series_details extends Component {
    state = {}
    render() {
        return (
            <div className="container-fluid ">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        {/* eslint-disable-next-line */}
                        <img className="b" src="img/10.jpg" />
                        <div class="carousel-caption">
                            <h1 class="display-2">WestWorld</h1>
                            <h3>Complete Website LayoutComplete Website LayoutComplete Website LayoutComplete Website LayoutComplete Website Layout</h3>
                            <div className="row ">
                                <button className="btn btn-sm text-dark active btn-outline-light m-1">Sesion 1</button>
                                <button className="btn btn-sm text-light btn-outline-light m-1">Sesion 2</button>
                                <button className="btn btn-sm text-light btn-outline-light m-1">Sesion 3</button>
                                <button className="btn btn-sm text-light btn-outline-light m-1">Sesion 4</button>
                                <button className="btn btn-sm text-light btn-outline-light m-1">Sesion 5</button>
                                <button className="btn btn-sm text-light btn-outline-light m-1">Sesion 6</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tv_series_details;