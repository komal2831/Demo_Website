import React, { Component } from 'react';

class Description extends Component {
    render() {
        return (
            <div className="row m-2 text-light" style={{marginTop:"60px"}}>
                <div className="col-6">
                    <h3>Description</h3>
                    <p>Harry Potter is a British-American film series based on the eponymous novels by author J. K. Rowling. The series is distributed by Warner Bros. and consists of eight fantasy films, beginning with Harry Potter and the Philosopher's Stone (2001) and culminating with Harry Potter and the Deathly Hallows – Part 2 (2019)</p>
                </div>
                <div className="col-6 p-4">
                    <p>Director :<span>Mahesh Bhatt</span></p>
                    <p>Language :<span>Hindi</span></p>
                    <p>Country :<span>Indian</span></p>
                </div>
            </div>
        );
    }
}

export default Description;