import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

class App extends Component {
    constructor(props) {
        super(props);
        this.getUsers = this.getUsers.bind(this);
        this.state = {
            name: '',
            username: '',
            email: '',
            phone: '',
            website: '',
        };
    

    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    
    getUsers() {
        return this.props.fetchUsers({
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            website: this.state.website,
        });
    }
    
    componentDidMount() {
        this.getUsers();
    }
    
    render() {
        this.getUsers();
        console.log(this.props);
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={event => this.setState({ name: event.target.value.replace(' ', '%20') })} />
                    <input type="text" value={this.state.value} onChange={event => this.setState({ username: event.target.value })} />
                    <input type="text" value={this.state.value} onChange={event => this.setState({ email: event.target.value })} />
                    <input type="text" value={this.state.value} onChange={event => this.setState({ phone: event.target.value })} />
                    <input type="text" value={this.state.value} onChange={event => this.setState({ website: event.target.value })} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}


export default connect(null, { fetchUsers })(App);