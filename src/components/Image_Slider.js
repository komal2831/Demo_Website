import React, { Component } from 'react';
import "./App.css"

class Image_Slider extends Component {
    render() {
        return (
            <div className="container-fluid ">
            <div class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li data-target="#slides" data-slide-to="0" class="active"></li>
                    <li data-target="#slides" data-slide-to="1"></li>
                    <li data-target="#slides" data-slide-to="2"></li>
                    <li data-target="#slides" data-slide-to="3"></li>
                    <li data-target="#slides" data-slide-to="4"></li>
                </ul>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                            {/* eslint-disable-next-line */}
                        <img className="b" src="img/9.jpg" />
                        <div class="carousel-caption">
                            <h1 class="display-2">Intersteller</h1>
                            <h3>Complete Website LayoutComplete Website LayoutComplete Website LayoutComplete Website LayoutComplete Website Layout</h3>
                            <button type="button" class="btn btn-outline-light a btn-sm" >VIEW DEMO</button>
                                <p>Action | Drama | Movies | Adventure</p>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        );
    }
}

export default Image_Slider;