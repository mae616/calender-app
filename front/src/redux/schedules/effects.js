import {
    schedulesSetLoading,
    schedulesFetchItem,
    schedulesAddItem,
    schedulesDeleteItem,
    schedulesAsyncFailure
} from './actions';
import { get, post, deleteRequest } from '../../services/api';
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

    // エラーを捕捉
    // effects で捕捉する理由としては、のちに redux でエラーを管理すると考えたときに effects で dispatch を仕分ける必要があるから
    try {
        // 指定された月の予定を取得する API を叩いている
        const result = await get(`schedules?month=${month}&year=${year}`);

        // 返ってきた結果のdateはただのstring（詳細にはISOStringという規格）で返ってくるので、
        // dateをdayjsインスタンスに変換する処理を行う。
        const formattedSchedule = result.map(form => formatSchedule(form));

        dispatch(schedulesFetchItem(formattedSchedule));
    } catch (err) {
        console.error(err);

        dispatch(schedulesAsyncFailure(err.message));
    }
};

// 予定を追加する
export const asyncSchedulesAddItem = schedule => async dispatch => {
    // loading: trueにする
    dispatch(schedulesSetLoading());

    try {
        // 日付をISOStringという規格に変換
        const body = { ...schedule, date: schedule.date.toISOString() };
        const result = await post('schedules', body);

        // POST が成功すると追加された予定が返ってくる
        // 日付データを処理して、schedulesAddItem()で dispatch して状態を更新
        const newSchedule = formatSchedule(result);
        dispatch(schedulesAddItem(newSchedule));
    } catch (err) {
        console.error(err);

        dispatch(schedulesAsyncFailure(err.message));
    }
};

// 予定を削除する
export const asyncSchedulesDeleteItem = id => async (dispatch, getState) => {
    dispatch(schedulesSetLoading());
    // getState...thunk の関数の第二引数で store のデータを取得することができる
    const currentSchedules = getState().schedules.items;

    try {
        await deleteRequest(`schedules/${id}`);

        // 成功したらローカルのstateを削除
        const newSchedules = currentSchedules.filter(form => form.id != id);
        // 新たに生成されたscheduleの配列が次の state なので、dispatchする
        dispatch(schedulesDeleteItem(newSchedules));
    } catch (err) {
        console.error(err);

        dispatch(schedulesAsyncFailure(err.message));
    }
};