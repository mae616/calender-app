import {
    schedulesSetLoading,
    schedulesFetchItem,
    schedulesAddItem
} from './actions';
import { get, post } from '../../services/api';
import { formatSchedule } from '../../services/schedule';

// その月の予定を取得する
// export const asyncSchedulesFetchItem = ({ month, year }) => {
//     return (async dispatch => {
//         dispatch(schedulesSetLoading());
//         const result = await get(`schedules?month=${month}${year}`);
//         const formattedSchedule = result.map(r => formatSchedule(r));
//         dispatch(schedulesFetchItem(formattedSchedule))
//     );
// };
// てこと↓
export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {
    dispatch(schedulesSetLoading()); // loading: trueにする action を dispatch 

    // 指定された月の予定を取得する API を叩いている
    const result = await get(`schedules?month=${month}&year=${year}`);

    // 返ってきた結果のdateはただのstring（詳細にはISOStringという規格）で返ってくるので、
    // dateをdayjsインスタンスに変換する処理を行う。
    const formattedSchedule = result.map(form => formatSchedule(form));

    dispatch(schedulesFetchItem(formattedSchedule));
};

// 予定を追加する
export const asyncSchedulesAddItem = schedule => async dispatch => {
    // loading: trueにする
    dispatch(schedulesSetLoading());

    // 日付をISOStringという規格に変換
    const body = { ...schedule, date: schedule.date.toISOString() };
    const result = await post('schedules', body);

    // POST が成功すると追加された予定が返ってくる
    // 日付データを処理して、schedulesAddItem()で dispatch して状態を更新
    const newSchedule = formatSchedule(result);
    dispatch(schedulesAddItem(newSchedule));
};