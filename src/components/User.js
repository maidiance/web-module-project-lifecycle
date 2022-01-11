import React from 'react';

class User extends React.Component {
    render(){
        return(
            <div>
                <img src={this.props.user.avatar_url} />
                <h2>{this.props.user.name}</h2>
                <p>{this.props.user.login}</p>
                <p>Total repos: {this.props.user.public_repos}</p>
                <p>Total followers: {this.props.user.followers}</p>
            </div>
        )
    }
}
export default User;