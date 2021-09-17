import { ADD, REMOVE } from './action-types';

function reducer(state = [], { type, payload }) {
    switch (type) {
        case ADD:
            return {
                ...state,
                ...payload,
            }
        case REMOVE:
            const filtered = state.filter( notif => notif !== payload );
            return {
                ...filtered,
            }
        default:
            return state
    }
}

export default reducer;
