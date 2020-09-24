import React, { Component } from 'react';

class DesCard extends Component {
    state = {
        arr: [
            { img: "img/11.jpg", name: "The oroginal", des: "Episod 1" },
            { img: "img/12.jpg", name: "The lol", des: "Episod 2" },
            { img: "img/13.jpg", name: "The Comedy", des: "Episod 3" },
            { img: "img/14.jpg", name: "The Drama", des: "Episod 4" },
        ]
    }
    render() {
        return (
            <div>
                <div class="container-fluid padding">
                    <div class="row padding">
                        {this.state.arr.map(st =>
                            <div class="col-md-3">
                                <div class="card cl">
                                    {/* eslint-disable-next-line */}
                                    <img class="card-img-top" src={st.img} />
                                    <div className="p-2">
                                        <div>{st.name}</div>
                                        <div>{st.des}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default DesCard;