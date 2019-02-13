import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';
import '../styles/styles.css';

function searchingForName(name, username, email, website, phone) {
    return function(x) {
        return ((x.name.toLowerCase().includes(name.toLowerCase()) || !name) && 
                (x.username.toLowerCase().includes(username.toLowerCase()) || !username) &&
                (x.email.toLowerCase().includes(email.toLowerCase()) || !email) && 
                (x.website.toLowerCase().includes(website.toLowerCase()) || !website) && 
                (x.phone.toLowerCase().includes(phone.toLowerCase()) || !phone)
        )
    }
}




class App extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.nameSearchHandler = this.nameSearchHandler.bind(this);
        this.usernameSearchHandler = this.usernameSearchHandler.bind(this);
        this.emailSearchHandler = this.emailSearchHandler.bind(this);
        this.phoneSearchHandler = this.phoneSearchHandler.bind(this);
        this.websiteSearchHandler = this.websiteSearchHandler.bind(this);
        this.state = {
            users: [],
            name: '',
            username: '',
            email: '',
            phone: '',
            website: '',
        };
    

    }
    handleSubmit(event) {
        console.log('props: ', this.props);
        this.getUsers();
        
        event.preventDefault();
    }
    
    getUsers() {
        
        return this.props.fetchUsers();
        
    }
    
    componentDidMount() {
        this.getUsers();
    }

    nameSearchHandler(event) {
        this.setState({ name: event.target.value });
    }

    usernameSearchHandler(event) {
        this.setState({ username: event.target.value });
    }

    emailSearchHandler(event) {
        this.setState({ email: event.target.value });
    }

    websiteSearchHandler(event) {
        this.setState({ website: event.target.value });
    }

    phoneSearchHandler(event) {
        this.setState({ phone: event.target.value });
    }

    render() {
        const users = this.props;
        console.log('yay', users);
        
        
        return (
            <div>
                <h1>Search for users</h1>
                <div className="filter-menu">
                    <form>
                    
                        
                            
                            <label>
                                Name:
                                <input type="text" value={this.state.name} onChange={this.nameSearchHandler} placeholder="Name"/>
                            </label>

                            <label>
                                Username:
                                <input type="text" value={this.state.username} onChange={this.usernameSearchHandler} placeholder="Username"/>
                            </label>

                            <label>
                                Email:
                                <input type="text" value={this.state.email} onChange={this.emailSearchHandler} placeholder="Email"/>
                            </label>

                            <label>
                                Website:
                                <input type="text" value={this.state.website} onChange={this.websiteSearchHandler} placeholder="Website"/>
                            </label>

                            <label>
                                Phone:
                                <input type="text" value={this.state.phone} onChange={this.phoneSearchHandler} placeholder="Phone"/>
                            </label>
                        
                        
                    </form>
                </div>
                <div className="filtered-results">
                        <ul>
                        {
                            this.props.users.filter(searchingForName(this.state.name, this.state.username,
                            this.state.email, this.state.website, this.state.phone)).slice(0, 5).map(user => {
                                return (
                                    <li key={user.id} className="list-group-item">
                                        <div className="list-item">
                                            <h3>{user.username} </h3>
                                            <p>{user.name} </p>
                                            <hr></hr>
                                            
                                        </div>
                                        <div className="list-item right-button"
                                        >
                                        
                                        </div>
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    console.log('users: ', state.users)
    return {
        users: state.users.users,
    };
}

export default connect(mapStateToProps, { fetchUsers })(App);