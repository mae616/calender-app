import {
    SCHEDULES_ADD_ITEM,
    SCHEDULES_FETCH_ITEM,
    SCHEDULES_SET_LOADING,
    SCHEDULES_DELETE_ITEM
} from './actions';

const init = {
    items: [],
    isLoading: false
};

const schedulesReducer = (state = init, action) => {
    const { type, payload } = action;

    switch (type) {
        case SCHEDULES_ADD_ITEM:
            return {
                ...state,
                items: [...state.items, payload]
            };
        case SCHEDULES_SET_LOADING:
            return {
                ...state,
                isLoading: true // statにすることでLoading画面を表示出来たりする（今回はやらない）
            };
        case SCHEDULES_FETCH_ITEM:
            return {
                ...state,
                isLoading: false,
                items: payload
            };
        case SCHEDULES_DELETE_ITEM:
            return {
                ...state,
                isLoading: false,
                items: payload // 削除後の取り除かれた予定の配列
            }
        default:
            return state;
    }
};

export default schedulesReducer;