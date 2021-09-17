import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { add } from 'src/store/actions';

const DELAY_DEFAULT = 3000;

function Notify({
    add,
    delay,
    children,
    ...status,
}) {
    if (!children) {
        return null;
    }

    const notification = {
        children,
        delay,
        ...status,
    }
    add(notification, delay);
    
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

const mapDispatchToProps = { add };

export default connect(null, mapDispatchToProps)(Notify);