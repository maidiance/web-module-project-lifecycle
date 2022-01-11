import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    user: {},
    input: 'Github Handle',
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/maidiance')
      .then(resp => {
        console.log(resp.data);
        this.setState({
          ...this.state,
          user: resp.data,
        })
      })
      .catch(err => {
        console.error(err);
      })
  }
  render() {
    return(
    <div>
      <h1>Github Info</h1>
      <form>
        <input/>
        <button>Search</button>
      </form>
      <div>
        <img src={this.state}
      </div>
    </div>
    );
  }
}

export default App;
