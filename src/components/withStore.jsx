import React from 'react';
import { Provider } from 'react-redux';

import store from '/src/store';

function withStore(WrappedComponent) {
    function Component(props) {
        return (
            <Provider store={store}>
                <WrappedComponent {...props}/>
            </Provider>
        );
    }

    Component.displayName = 'withStore';
    return Component;
} 

export default withStore;