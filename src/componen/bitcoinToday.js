import React, { Component } from 'react';
import axios from 'axios'

class BitcoinToday extends Component {
  constructor () {
      super();
      this.state = {
          info: ''
      }
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
        
    return (
      <div className="text-center">
      <h1>Harga Bitcoin Hari Ini</h1>
        <table class="table">
            <thead class="thead-light">
                <tr>
                    <th scope="col">Mata Uang</th>
                    <th scope="col">Harga Beli Bitcoin</th>
                    <th scope="col">Harga Jual Bitcoin</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dollar Australia</td>
                    <td>{this.state.info ? this.state.info.AUD.buy : ''}</td>
                    <td>{this.state.info ? this.state.info.AUD.sell : ''}</td>
                </tr>
                <tr>
                    <td>Yuan China</td>
                    <td>{this.state.info ? this.state.info.CNY.buy : ''}</td>
                    <td>{this.state.info ? this.state.info.CNY.sell : ''}</td>
                </tr>
                <tr>
                    <td>Euro Eropa</td>
                    <td>{this.state.info ? this.state.info.AUD.buy : ''}</td>
                    <td>{this.state.info ? this.state.info.AUD.sell : ''}</td>
                </tr>
                <tr>
                    <td>Dolar Amerika Serikat</td>
                    <td>{this.state.info ? this.state.info.USD.buy : ''}</td>
                    <td>{this.state.info ? this.state.info.USD.sell : ''}</td>
                </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

export default BitcoinToday;
