import { Satellite } from '@material-ui/icons';
import {
    CURRENT_SCHEDULE_SET_ITEM,
    CURRENT_SCHEDULE_OPEN_DIALOG,
    CURRENT_SCHEDULE_CLOSE__DIALOG
} from './actions';

const init = {
    item: null,
    isDialogOpen: false
}

const currentScheduleReducer = (state = init, action) => {
    const { type, payload } = action;

    // open ならtrueに close ならfalseにisDialogOpenをセットしている
    // 今回初期化していないのは、閉じるときのアニメーション中に内容がリセットされ dialog の大きさが変わってしまうから
    switch (type) {
        case CURRENT_SCHEDULE_SET_ITEM:
            return { ...state, item: payload };
        case CURRENT_SCHEDULE_OPEN_DIALOG:
            return { ...state, isDialogOpen: true };
        case CURRENT_SCHEDULE_CLOSE_DIALOG:
            return { ...state, isDialogOpen: false };
        default:
            return state;
    }
};

export default currentScheduleReducer;