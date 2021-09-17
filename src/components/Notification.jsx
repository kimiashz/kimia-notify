import React, { memo } from 'react';
import PropTypes from 'prop-types';

const BLOCK = 'notification';

function Notification({
    children,
    ...status
}) {
    const modifier = `${BLOCK}--${status}`;
    return (
        <div className={`${BLOCK} ${modifier}`}>
            {children}
        </div>
    )
}

Notification.defaultProps = {
    info: false,
    warning: false,
    success: false,
    error: false,
};

Notification.propTypes = {
    children: PropTypes.string.isRequired,
    info: PropTypes.bool,
    warning: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.bool,
};

export default memo(Notification);