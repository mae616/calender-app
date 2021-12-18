// connectする
import { connect } from 'react-redux';
import CalendarBoard from './presentation';
import { createCalendar } from '../../services/calendar';

import {
    addScheduleOpenDialog,
    addScheduleSetValue
} from '../../redux/addSchedule/actions';

// stateをpropsにマッピングしている
// ※状態の変更の監視を行なって、store が何かひとつでも変更されると、どれが変更されたかによらず実行される
const mapStateToProps = state => ({ calendar: state.calendar });

const mapDispatchToProps = dispatch => ({
    openAddScheduleDialog: d => {
        dispatch(addScheduleOpenDialog());

        // ダイアログを開いた時、押した日が選択されているようにする
        dispatch(addScheduleSetValue({ date: d }));
    }
})

// mergeProps...mapStateToPropsで生成されたpropsと
//              mapDispatchToPropsで生成されたpropsを
//             引数にとり、コンポーネントで使う形に整形して渡す関数
// stateProps...mapStateToPropsのこと
// ※mergePropsはmapStateToPropsの結果が前回と異なっていたときにだけ実行される
const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    month: stateProps.calendar,
    calendar: createCalendar(stateProps.calendar)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps)(CalendarBoard);