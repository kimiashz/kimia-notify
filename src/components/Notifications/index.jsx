import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import withStore from '../withStore.jsx';
import Notification from '../Notification/index.jsx';

import './Notifications.sass';

const BLOCK = 'notifications';

function Notifications({
    notifications,
}) {
    if (!notifications) {
        return null;
    }

    return (
        <div className={BLOCK}>
            {notifications.map( (props, index) => 
                <Notification className={`${BLOCK}__notif`} key={index} {...props}/>
            )}
        </div>
    )
}

Notifications.defaultProps = {
    notifications: undefined,
};

Notifications.propTypes = {
    notifications: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = ({ notifications }) => ({ notifications });

export default withStore(connect(mapStateToProps)(Notifications));