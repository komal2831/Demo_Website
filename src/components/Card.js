import React, { Component } from 'react';

class Card extends Component {
    state = {
        arr: [
            { img: "img/5.jpg", name: "Adventure", des: "Collection of the adventure areas" },
            { img: "img/6.jpg", name: "Fantastic", des: "Collection of the fantastic areas" },
            { img: "img/7.jpg", name: "Comedy", des: "Collection of the comedy areas" },
            { img: "img/8.jpg", name: "Drama", des: "Collection of the drama areas" },
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
                                    <img class="card-img-top" src={st.img} />
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

export default Card;