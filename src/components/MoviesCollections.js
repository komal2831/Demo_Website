import React, { Component } from 'react';
import Card from './Card';
import NewCard from './NewCard';

class MoviesCollections extends Component {
    render() { 
        return ( 
            <div className="container-fluid">
            <h2 className="text-light m-5 ">Movie Collections</h2>
            <Card />
                <h2 className="text-light m-5 ">New</h2>
            <NewCard />
            </div>
         );
    }
}
 
export default MoviesCollections;