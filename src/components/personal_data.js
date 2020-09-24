import React, { Component } from 'react';
import Tv_series_details from './Tv_series_details'
import SeriesPlay from './SeriesPlay';
import Description from "./Description";
import DesCard from './DesCard'

class personal_data extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {/* eslint-disable-next-line */}
                <Tv_series_details />
                <SeriesPlay />
                <Description />
                <DesCard />
            </div>
         );
    }
}
 
export default personal_data;
