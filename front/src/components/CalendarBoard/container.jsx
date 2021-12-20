// connectする
import { connect } from 'react-redux';
import CalendarBoard from './presentation';
import { createCalendar } from '../../services/calendar';
import { setSchedules } from '../../services/schedule';

import {
    addScheduleOpenDialog,
    addScheduleSetValue
} from '../../redux/addSchedule/actions';

import {
    currentScheduleSetItem,
    currentScheduleOpenDialog
} from '../../redux/currentSchedule/actions';

// stateをpropsにマッピングしている
// ※状態の変更の監視を行なって、store が何かひとつでも変更されると、どれが変更されたかによらず実行される
const mapStateToProps = state => ({
    calendar: state.calendar,
    schedules: state.schedules
});

const mapDispatchToProps = dispatch => ({
    openAddScheduleDialog: d => {
        dispatch(addScheduleOpenDialog());

        // ダイアログを開いた時、押した日が選択されているようにする
        dispatch(addScheduleSetValue({ date: d }));
    },
    openCurrentScheduleDialog: (schedule, e) => {
        // 他のイベントが発火するのをキャンセルする
        // 日付の箱には新しい予定を作成するための dialog を開くイベントも登録してあるのでそちらも発火してしまう。
        e.stopPropagation();

        dispatch(currentScheduleSetItem(schedule));
        dispatch(currentScheduleOpenDialog());
    }
})

// mergeProps...mapStateToPropsで生成されたpropsと
//              mapDispatchToPropsで生成されたpropsを
//             引数にとり、コンポーネントで使う形に整形して渡す関数
// stateProps...mapStateToPropsのこと
// ※mergePropsはmapStateToPropsの結果が前回と異なっていたときにだけ実行される
const mergeProps = (stateProps, dispatchProps) => {
    const {
        calendar: month,
        schedules: { items: schedules }
    } = stateProps;

    const calendar = setSchedules(createCalendar(month), schedules);

    return {
        ...stateProps,
        ...dispatchProps,
        calendar,
        month
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps)(CalendarBoard);