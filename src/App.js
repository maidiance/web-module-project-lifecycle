import React from 'react';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';
import './styles.css';

class App extends React.Component {
  state = {
    user: {},
    followers: [],
    search: 'Github Handle',
  }

  // load my github data
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

  // load follower information
  componentDidUpdate(prevProps, prevState) {
    // only when user slice of state changes
    if(prevState.user !== this.state.user){
      axios.get(`https://api.github.com/users/${this.state.user.name}/followers`)
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
  }

  // handle input change
  handleChange = (e) => {
    this.setState({
      ...this.state,
      search: e.target.value
    })
  }

  handleSearch = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.search}`)
      .then(resp => {
        this.setState({
          ...this.state,
          user: resp.data,
          search: ''
        })
      .catch(err => {
        console.error(err);
      })
    })
  }

  render() {
    return(
    <div className='header'>
      <h1>Github Info</h1>
      <form>
        <input className='search' onChange={this.handleChange} />
        <button className='button' onClick={this.handleSearch}>Search</button>
      </form>
      <User user={this.state.user} />
      <FollowerList followers={this.state.followers} />
    </div>
    );
  }
}

export default App;
