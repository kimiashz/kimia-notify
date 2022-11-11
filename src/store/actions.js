import { ADD, REMOVE } from './action-types';

export function addAction(notification) {
    return {
        type: ADD,
        payload: notification,
    };
}

export function removeAction(ref) {
    return {
        type: REMOVE,
        payload: ref,
    };
}