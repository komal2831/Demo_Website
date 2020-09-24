import React, { Component } from 'react';
import Image_Slider from "./Image_Slider";
import MoviesCollections from "./MoviesCollections"

class MainPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid center">
                {/* eslint-disable-next-line */}
                <Image_Slider />
                <MoviesCollections />
            </div>
         );
    }
}
 
export default MainPage;