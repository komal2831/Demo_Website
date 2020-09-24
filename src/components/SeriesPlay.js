import React, { Component } from 'react';

class SeriesPlay extends Component {
    render() {
        return (
            <div className="container-fluid padding">
                <div className="row padding " style={{marginTop:"40px"}}>
                    <div className="col-lg-6">
                        {/* eslint-disable-next-line */}
                        <img src="img/15.jpg" className="img-fluid" />
                    </div>
                    <div className="col-md-12 col-lg-6 text-light">
                        <h3>Continew Watching</h3>
                        <p>Sesion 1 Episod 12</p>
                        <p>"The Story"</p>
                        <br />
                    </div>   
                </div>
            </div>
        );
    }
}

export default SeriesPlay;