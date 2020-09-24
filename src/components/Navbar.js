import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light sticky-top" style={{background:"black"}}>
                <div className="container-fluid">
                    {/* eslint-disable-next-line */}
                    <img src="/img/logo.png" ></img>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                    <input className="form-control m-1" placeholder="Search" style={{ width:"700px"}}></input>
                                </li>
                            <li className="nav-item">
                                <button className="btn text-info btn-light bg-dark m-1"><i className="fa fa-globe text-light p-1" aria-hidden="true"></i>En</button>
                                </li>
                            <li className="nav-item">
                                    <button className="btn text-info btn-light bg-dark m-1">Login</button>
                                </li>
                            <li className="nav-item">
                                    <button className="btn btn-primary m-1">Try Now</button>
                                </li>
                            </ul>
                        </div>
		
</div>	
</nav>
        )
    }
}




export default Navbar;