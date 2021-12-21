import Navigation from './presentation';

import { connect } from 'react-redux';

import {
    getNextMonth,
    getPreviousMonth,
    getMonth,
    formatMonth
} from '../../services/calendar';

import { calendarSetMonth } from '../../redux/calendar/actions';
import { asyncSchedulesFetchItem } from '../../redux/schedules/effects';

const mapStateToProps = state => ({ calendar: state.calendar });

// mapDispatchToPropsは connect の第二引数の関数で、
// dispatch を使う props として渡す関数を定義するためのもの
// dispatchの際に state が必要になる
const mapDispatchToProps = dispatch => ({
    setMonth: month => {
        dispatch(calendarSetMonth(month));
    },
    fetchItem: month => {
        dispatch(asyncSchedulesFetchItem(month));
    }
});

// mergePropsでmapStateToPropsとmapDispatchToPropsの結果を使ってごにょごにょしている
const mergeProps = (stateProps, dispatchProps) => ({
    month: getMonth(stateProps.calendar),
    setNextMonth: () => {  // > から変更
        const nextMonth = getNextMonth(stateProps.calendar);
        dispatchProps.setMonth(nextMonth);

        // 予定を非同期で取ってくる
        dispatchProps.fetchItem(nextMonth);
    },
    setPreviousMonth: () => { // < から変更
        const previousMonth = getPreviousMonth(stateProps.calendar);
        dispatchProps.setMonth(previousMonth);

        // 予定を非同期で取ってくる
        dispatchProps.fetchItem(previousMonth);
    },
    setMonth: dayObj => { // DatePickerから変更
        // dayjs→reduxのstate
        const month = formatMonth(dayObj);
        dispatchProps.setMonth(month);

        // 予定を非同期で取ってくる
        dispatchProps.fetchItem(month);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Navigation);