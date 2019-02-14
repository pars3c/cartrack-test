import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserContactInfo from './UserContactInfo';
import './styles.css';

class UserDetailed extends Component {
    
    render() {
        return (
            <UserContactInfo detailedUser={this.props.users.users.filter(user => user.id == this.props.match.params.id)} />
        )
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(UserDetailed);