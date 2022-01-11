import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    user: {},
    followers: [],
    input: 'Github Handle',
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
        console.log(resp.data);
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
      <div>
        <img src={this.state.user.avatar_url} />
        <h2>{this.state.user.name}</h2>
        <p>{this.state.user.login}</p>
        <p>Total repos: {this.state.user.public_repos}</p>
        <p>Total followers: {this.state.user.followers}</p>
      </div>
      <div>
        <h2>Followers:</h2>
        {
          this.state.followers.map(user => {
            return(
              <div key={user.node_id}>
                <img src = {user.avatar_url} />
                <p>{user.login}</p>
              </div>
            )
          })
        }
      </div>
    </div>
    );
  }
}

export default App;
