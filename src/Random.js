import React from 'react';
import ReactDOM from 'react-dom';

/*
*
* Here's a very simple method that works off of a single random number generation.
* Basically, it generates a number between 0 and 0xfffff (or 2^24, the highest number you can get from 24 bits).
* The highest value you can get from 8 bits is 255. This algorithm takes the left-most 8 bits of the random number for RED,
* the middle 8 bits for GREEN,
* and the last 8 bits for BLUE,
* using all 24 bits of the random number.
*
*
*
* */

const white = '#FFFFFF';

export class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color : white};
        this.getRandomRGB = this.getRandomRGB.bind(this);
    }


    getRandomRGB() {
        let num = Math.round(0xffffff * Math.random());
        let rgb;
        let r = num >> 16;
        let g = num >> 8 & 255;
        let b = num & 255;
        rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        this.setState({color: rgb});
        console.log(rgb);
        return rgb; // may not be needed yet
    }


    render() {
        return (
            <div style={{background : this.state.color}}>
                <h1>
                    Change my color
                </h1>
                <button onClick={this.getRandomRGB}>
                    Change color
                </button>
            </div>
        );
    }
}

