import React from 'react';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  state = {
    user: {},
    followers: [],
    search: 'Github Handle',
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/maidiance')
      .then(resp => {
        this.setState({
          ...this.state,
          user: resp.data,
        })
      })
      .catch(err => {
        console.error(err);
      })
    axios.get('https://api.github.com/users/maidiance/followers')
      .then(resp => {
        this.setState({
          ...this.state,
          followers: resp.data,
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
      <User user={this.state.user} />
      <FollowerList followers={this.state.followers} />
    </div>
    );
  }
}

export default App;
