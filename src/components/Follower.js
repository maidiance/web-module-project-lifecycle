import React from 'react';

class Follower extends React.Component {
    render(){
        return(
            <div className='follower'>
                <img src = {this.props.user.avatar_url} />
                <p>{this.props.user.login}</p>
            </div>
        )
    }
}
export default Follower;