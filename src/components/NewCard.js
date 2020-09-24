import React, { Component } from 'react';

class NewCard extends Component {
    state = {
        arr: [
            { img: "img/1.jpg", name: "Adventure", des: "Collection of the adventure areas" },
            { img: "img/2.jpg", name: "Fantastic", des: "Collection of the fantastic areas" },
            { img: "img/3.jpg", name: "Comedy", des: "Collection of the comedy areas" },
            { img: "img/4.jpg", name: "Drama", des: "Collection of the drama areas" },
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
                                    <img class="card-img-top cardImage" src={st.img} />
                                    <div>
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

export default NewCard;