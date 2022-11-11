import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addAction, removeAction } from '/src/store/actions';
import withStore from './withStore.jsx';

const DELAY_DEFAULT = 3000;

function Notify({
    add,
    remove,
    delay,
    children,
    ...status
}) {
    if (!children) {
        return null;
    }

    const notification = {
        children,
        delay,
        ...status,
    }

    add(notification);
    setTimeout(() => {
        remove(notification)
    }, delay);
    
    return null;
}

Notify.defaultProps = {
    delay: DELAY_DEFAULT,
    children: undefined,
};

Notify.propTypes = {
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    delay: PropTypes.number,
    children: PropTypes.node,
};

const mapDispatchToProps = dispatch => ({
    add: (...args) => dispatch(addAction(...args)),
    remove: (...args) => dispatch(removeAction(...args)),
});

export default withStore(connect(null, mapDispatchToProps)(Notify));