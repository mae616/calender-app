import dayjs from 'dayjs';

import { CALENDAR_SET_MONTH } from './actions';

import { formatMonth } from '../../services/calendar';

const day = dayjs();

// 今日の年と月を初期値にする
const init = formatMonth(day);

// ※reducer にロジックを持たせないようにする
const calendarReducer = (state = init, action) => {
    const { type, payload } = action;
    switch (type) {
        case CALENDAR_SET_MONTH:
            return payload;
        default:
            return state;
    }
};

export default calendarReducer;