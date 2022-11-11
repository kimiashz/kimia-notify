import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { classGenerator } from '/src/utils.js';

import './Notification.sass';

const BLOCK = 'notification';
const cg = classGenerator(BLOCK);

function Notification({
    children,
    delay,
    className: classNameProp,
    ...status
}) {
    const className = cg(
        status,
        undefined,
        classNameProp,
    );

    return (
        <div className={className}>
            {children}
        </div>
    )
}

Notification.defaultProps = {
    delay: undefined,
};

Notification.propTypes = {
    children: PropTypes.string.isRequired,
    delay: PropTypes.number,
};

export default memo(Notification);