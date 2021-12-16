// connectする
import { connect } from 'react-redux';
import CalendarBoard from './presentation';

const mapStateToProps = state => ({ calendar: state.calendar });

export default connect(mapStateToProps)(CalendarBoard);