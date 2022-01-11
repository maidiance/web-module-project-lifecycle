import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
    render(){
        return(
            <div>
                <h2>Followers:</h2>
                <div className='container'>
                    {
                        this.props.followers.map(user => {
                            return(
                                <Follower key={user.node_id} user={user}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default FollowerList;