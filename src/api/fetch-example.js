

const fetchCoinData = () => {
  return new Promise((resolve, reject) => {
    axios
    .get('https://api.coinmarketcap.com/v1/ticker/')
    .then(res => resolve(res))
    .catch(err => reject(err))
  })
}

// ------------------------------------------------------------------

import { fetchCoinData } from 'data/coins' 

class CoinDashboard extends React.Component {
  componentDidMount() {
    this.setState({ loading: true }, () => {
      this.getCoinData()
    })
  }
  
  getCoinData() {
    fetchCoinData()
      .then((data) => { this.setState({ coins: data }) })
      .catch((err) => { this.setState({ loading: false, errorMessage: err }) })
  }
}




