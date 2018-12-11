import React, { Component } from 'react';
import axios from 'axios'


class RupiahBitcoin extends Component {
    state = {
        rupiah: 0,
        bitcoin: 0,
        info: ''
    }

    componentDidMount () {
        axios.get('https://blockchain.info/ticker')
        .then((ambil) => {
            console.log(ambil)
            this.setState ({
                info: ambil.data,
            })
        })
    }

    render() {
      let input = (e)=> {
          this.setState({
              rupiah: e.target.value,
              bitcoin: this.state.info.USD.buy
          }) 
      }

      let konversi = (this.state.rupiah/14000)/(this.state.bitcoin)

    return (
      <div className="text-center">
        <h2>Konversi Rupiah Ke Bitcoin</h2>
        <p>Kurs 1 USD = 14.000 IDR</p>
        <input type="number" onInput={input}></input>
        <h4>Rp. {this.state.rupiah} = {konversi} BTC</h4>
      </div>
    );
  }
}

export default RupiahBitcoin;
