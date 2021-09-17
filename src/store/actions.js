import { ADD, REMOVE } from './action-types';

export function add(notification, delay) {
    return dispatch => {
        setTimeout(() => {
            dispatch(remove(notification));
        }, delay);
        return {
            type: ADD,
            payload: notification,
        }
    };
}

export function remove(ref) {
    return {
      type: REMOVE,
      payload: ref,
    };
}