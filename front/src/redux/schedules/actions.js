// constants
export const SCHEDULES_ADD_ITEM = 'SCHEDULES_ADD_ITEM';

// 非同期
export const SCHEDULES_FETCH_ITEM = 'SCHEDULES_FETCH_ITEM';
export const SCHEDULES_SET_LOADING = 'SCHEDULES_SET_LOADING';

// actions
export const schedulesAddItem = payload => ({
    type: SCHEDULES_ADD_ITEM,
    payload
});

export const schedulesFetchItem = payload => ({
    type: SCHEDULES_FETCH_ITEM,
    payload
});

// データを取得する前は何もデータを渡す必要がないので、payloadはない
export const schedulesSetLoading = () => ({
    type: SCHEDULES_SET_LOADING
});