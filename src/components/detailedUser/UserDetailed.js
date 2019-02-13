import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/userActions';
import UserContactInfo from './UserContactInfo';
import './styles.css';

class UserDetailed extends Component {
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
            <UserContactInfo detailedUser={this.props.users.users.filter(user => user.id == this.props.match.params.id)} />
        )
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { fetchUsers })(UserDetailed);