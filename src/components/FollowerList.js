import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
    render(){
        return(
            <div>
                <h2>Followers:</h2>
                {
                    this.props.followers.map(user => {
                        return(
                            <Follower key={user.node_id} user={user}/>
                        )
                    })
                }
            </div>
        )
    }
}
export default FollowerList;