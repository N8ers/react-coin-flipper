import React, { Component } from 'react';

class Fliplogic extends Component {

    btnHandler() {
        function coinToss() {
            return Math.random() < 0.5 ? 'heads' : 'tails';
          }
        if (coinToss()=== 'heads') {
        document.getElementById('flipper').style.animation = "flip 1.5s";
        document.getElementById('result').innerHTML = "HEADS!";
        } else {
        document.getElementById('flipper').style.animation = "flip 1.5s";
        document.getElementById('result').innerHTML = "TAILS!";
        } 
      };

    render() {
        return(
            <div>
                <h3>can't make a decision? <br /> flip a coin!</h3>
                <div className="btnbox" href="#flipper">
                    <button 
                        onClick={this.btnHandler} 
                        className="btn">FLIP</button>
                </div>
            </div>
        );
    }
}

export default Fliplogic;