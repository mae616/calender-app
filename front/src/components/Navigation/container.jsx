import Navigation from './presentation';

import { connect } from 'react-redux';

import { getNextMonth, getPreviousMonth } from '../../services/calendar';
import { calendarSetMonth } from '../../redux/calendar/actions';

const mapStateToProps = state => ({ calendar: state.calendar });

// mapDispatchToPropsは connect の第二引数の関数で、
// dispatch を使う props として渡す関数を定義するためのもの
// dispatchの際に state が必要になる
const mapDispatchToProps = dispatch => ({
    setMonth: month => {
        dispatch(calendarSetMonth(month));
    }
});

// mergePropsでmapStateToPropsとmapDispatchToPropsの結果を使ってごにょごにょしている
const mergeProps = (stateProps, dispatchProps) => ({
    setNextMonth: () => {
        const nextMonth = getNextMonth(stateProps.calendar);
        dispatchProps.setMonth(nextMonth);
    },
    setPreviousMonth: () => {
        const previousMonth = getPreviousMonth(stateProps.calendar);
        dispatchProps.setMonth(previousMonth);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Navigation);