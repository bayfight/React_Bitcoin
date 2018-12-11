import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import Bitcointoday from './componen/bitcoinToday'
import RupiahBitcoin from './componen/rupiahBitcoin'
import BitcoinRupiah from './componen/bitcoinRupiah'

class App extends Component {

  componentDidMount() {
    axios.get('https://blockchain.info/ticker')
      .then((ambil) => {
        console.log(ambil)
        this.setState({
          info: ambil.data,
        })
      })
  }

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <Link class="navbar-brand" to="/bitcointoday">Bitcoin</Link>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <Link class="nav-link ml-5" to="/rupiahBitcoin">Rupiah ke Bitcoin <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/bitcoinRupiah">Bitcoin ke Rupiah</Link>
      </li>
    </ul>
  </div>
  </nav>
        <Route path='/bitcointoday' component={Bitcointoday} />
        <Route path='/rupiahBitcoin' component={RupiahBitcoin} />
        <Route path='/bitcoinRupiah' component={BitcoinRupiah} />
      </div>
    );
  }
}

export default App;