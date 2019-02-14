import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/userActions';
import UserFilter from './UserFilter';
import './styles.css';


// Filtering function
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




class UserOverview extends Component {

    constructor(props) {
        super(props);
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
    getUsers() {
        return this.props.fetchUsers();
    }
    
    // Fetch all users when all outputs are loaded
    componentDidMount() {
        this.getUsers();
    }


    // Form Handlers
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
                <UserFilter filteredUsers={this.props.users.users.filter(searchingForName(this.state.name, this.state.username,
                            this.state.email, this.state.website, this.state.phone))}/>
                
            </div>
        )
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { fetchUsers })(UserOverview);