import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/userActions';



class UserContactInfo extends Component {
    constructor(props) {
        super(props);
        this.getUsers = this.getUsers.bind(this);
    }

    
    getUsers() {
        return this.props.fetchUsers();
        
    }
    
    componentDidMount() {
        this.getUsers();
    }
    render() {
        return (
            <div>
                {
                    this.props.detailedUser.map(user => {
                        return (
                            
                            <div className="contact-info" key={user.id}>
                            <Link to="/"><a href="/">Go Back</a></Link>
                                <h1>Let's Get in Touch</h1>
                                <div className="left-col">
                                    <table>
                                        <tr>
                                            <th>Name</th>
                                            <th>Username</th> 
                                        </tr>
                                        <tr>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <th>Phone Number</th> 
                                        
                                        </tr>
                                        <tr>
                                            <td><a href={`mailto:${user.email}?Subject=Hello%20${user.name}`} target="_top">{user.email}</a></td>
                                            <td>{user.phone}</td>
                                        </tr>
                                        <tr>
                                            <th>Website</th>
                                            <th>City</th> 
                                        
                                        </tr>
                                        <tr>
                                            <td>{user.website}</td>
                                            <td>{user.address.city}</td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="right-col extra-contact-info">
                                    <h2>Extra Info:</h2>
                                    <label>Works for:
                                        <h3>{user.company.name}</h3>
                                    </label>
                                    <label>Role in the company: 
                                        <h3>{user.company.bs}</h3>
                                    </label>
                                    <label>Company catch phrase: 
                                        <h3>"{user.company.catchPhrase}"</h3>
                                    </label>
                                    <label>Adress: 
                                    <h3>{user.address.city}, {user.address.street}, {user.address.suite}.</h3>
                                    </label>
                                    <label>Zip Code: 
                                        <h3>{user.address.zipcode}</h3>
                                    </label>
                                </div>
                            </div>
                        )
                    })
                }   
            </div>
        )
    }
}




export default connect(null, { fetchUsers })(UserContactInfo);