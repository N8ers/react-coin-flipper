import React, { Component } from 'react';



class Fliplogic extends Component {

    btnHandler() {
        function coinToss() {
            return Math.random() < 0.5 ? 'heads' : 'tails';
          }
        if (coinToss()=== 'heads') {
        //   document.getElementById('result').innerHTML = "HEADS!";
        console.log("heads");
        } else {
        //   document.getElementById('result').innerHTML = "TAILS!";
        console.log("tails");
        }
      };

    render() {
        return(
            <div>
                <div className="coincontainer" id="flipper">
                <h1 className="coin" id="result">Heads-or-Tails</h1>
                </div>
                <h3>can't make a decision? <br /> flip a coin!</h3>
                <div className="btnbox">
                <button 
                    onClick={this.btnHandler()} 
                    type="button" 
                    className="btn">FLIP</button>
                </div>
            </div>
        );
    }
}

export default Fliplogic;