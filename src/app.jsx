import React from 'react';
import { Provider } from 'react-redux';

import store from '/src/store';
import Container from '/src/components/Container.jsx';
import Notify from '/src/components/Notify.jsx';

function Notifications() {
    return (
        <Provider store={store}>
            <Container/>
        </Provider>
    )
} 

export { Notifications, Notify };