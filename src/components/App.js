    import React, { Component } from 'react';
    import { connect } from 'react-redux';
    import { fetchUsers } from '../actions/userActions';

    class App extends Component {
        constructor(props) {
            super(props);
            this.handleSubmit = this.handleSubmit.bind(this);
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
            console.log('props: ', this.props);
            this.getUsers();
            
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
            
            
            
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={event => this.setState({ name: event.target.value })} />
                        <input type="text" value={this.state.username} onChange={event => this.setState({ username: event.target.value })} />
                        <input type="text" value={this.state.email} onChange={event => this.setState({ email: event.target.value })} />
                        <input type="text" value={this.state.phone} onChange={event => this.setState({ phone: event.target.value })} />
                        <input type="text" value={this.state.website} onChange={event => this.setState({ website: event.target.value })} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>

                    <ul className="list-group">
                {
                        this.props.users.map(user => {
                            return (
                                <li key={user.id} className="list-group-item">
                                    <div className="list-item">
                                        {user.name}
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