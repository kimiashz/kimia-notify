import { ADD, REMOVE } from './action-types';

const INIT = {
    notifications: []
};

function reducer(state = INIT, { type, payload }) {
    switch (type) {
        case ADD:
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    payload
                ]
            }
        case REMOVE:
            return {
                ...state,
                notifications: state.notifications.filter( notif => notif !== payload )
            }
        default:
            return state
    }
}

export default reducer;
