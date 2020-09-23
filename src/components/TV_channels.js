import React, { Component } from 'react';
import Tv_series_details from './Tv_series_details'
import SeriesPlay from './SeriesPlay';
import Description from "./Description";
import DesCard from './DesCard'

class TV_channels extends Component {
    state = {}
    render() {
        return (
            <div>
                <Tv_series_details />
                <SeriesPlay />
                <Description />
                <DesCard />
            </div>
        );
    }
}

export default TV_channels;