import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Notification from './Notification.jsx';

const BLOCK = 'notifications';

function Container({
    notifications,
}) {
    if (!notifications) {
        return null;
    }

    return (
        <div className={BLOCK}>
            {notifications.map( ({ message, ...status }) => 
                <Notification {...status}>{message}</Notification>
            )}
        </div>
    )
}

Container.propTypes = {
    notifications: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ notifications }) => ({ notifications });

export default connect(mapStateToProps)(Container);