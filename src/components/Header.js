import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {}
    render() {
        return (
            <div className="container-fluid">
                <div className="m-2">Categerios</div>
                <button className="btn p-2 aa active"><Link to='/' className="text-light active"><i className="fa fa-home m-2 text-light" aria-hidden="true"></i>MainPage</Link></button><br />
                <button className="btn p-2 aa"><Link to='/TV_channels' className="text-light active"><i className="fa fa-television m-2 text-light" aria-hidden="true"></i>TV_channels</Link></button><br />
                <button className="btn p-2 aa"><Link to='/Movies' className="text-light active"><i className="fa fa-film m-2 text-light" aria-hidden="true"></i>Movies</Link></button><br />
                <button className="btn p-2 aa"><Link to='/TV_series' className="text-light active"><i className="fa fa-tv m-2 text-light" aria-hidden="true"></i>TV_series</Link></button><br />
                <button className="btn p-2 aa"><Link to='/Conceris' className="text-light active"><i className="fa fa-exchange m-2 text-light" aria-hidden="true"></i>Concerts</Link></button><br />
                <button className="btn p-2 aa"><Link to='/Sport' className="text-light active"><i className="fa fa-soccer-ball-o m-2 text-light" aria-hidden="true"></i>Sport</Link></button><br />
                <button className="btn p-2 aa"><Link to='/For_kids' className="text-light active"><i className="fa fa-child m-2 text-light" aria-hidden="true"></i>For_kids</Link></button><br />
                <button className="btn p-2 aa"><Link to='/Favourites' className="text-light active"><i className="fa fa-address-book m-2 text-light" aria-hidden="true"></i>Favourites</Link></button><br />
                <button className="btn p-2 aa"><Link to='/Personal_data' className="text-light active"><i className="fa fa-user m-2 text-light" aria-hidden="true"></i>Personal_data</Link></button><br />
                <p className="store text-center">The app description in an Apple app store listing three purposes.</p>
                <div className="row ">
                    <button className="btn btn-sm text-light btn-outline-light m-1"><i class="fa fa-apple m-2"></i>App Store</button>
                    <button className="btn btn-sm text-light btn-outline-light m-1"><i class="fa fa-play m-2"></i>Google Play</button>
                </div>
            </div>
        );
    }
}

export default Header;