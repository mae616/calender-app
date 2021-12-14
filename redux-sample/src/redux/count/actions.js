import { INCREMENT, DECREMENT } from './constants';

// action

// payload...actionの実行に必要な引数
export const increment = payload => ({
    type: INCREMENT,    // action type
    payload
});

export const decrement = payload => ({
    type: DECREMENT,
    payload
});