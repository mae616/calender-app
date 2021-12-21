import { schedulesSetLoading, schedulesFetchItem } from './actions';
import { get } from '../../services/api';
import { formatSchedule } from '../../services/schedule';


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