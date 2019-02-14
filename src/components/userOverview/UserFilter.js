import React, { Component } from 'react';


class UserFilter extends Component {

    render() {
        return ( 
                <div className="filtered-results">
                        <ul>
                        
                        {
                            this.props.filteredUsers.slice(0, 5).map(user => {
                                return (
                                    <li key={user.id} 
                                        className="list-group-item"
                                        
                                        >
                                        <a href={`/detailed-user/${user.id}`}>
                                        <div className="list-item">
                                            <h3>{user.username} </h3>
                                            <p>{user.name} </p>
                                            <hr></hr>
                                            
                                        </div>
                                        <div className="list-item right-button"
                                        >
                                        
                                        </div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
        )
    }
}

export default UserFilter;