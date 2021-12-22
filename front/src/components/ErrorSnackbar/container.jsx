import { connect } from 'react-redux';
import ErrorSnackbar from './presentation';
import { schedulesResetError } from '../../redux/schedules/actions';

// 必要最低限の state だけに絞ることによって、今回の場合だとエラーが dispatch されたときにだけ
// コンポーネント内部の処理が実行されるようにできるのでパフォーマンスも向上させられる
const mapStateToProps = state => ({ error: state.schedules.error });

const mapDispatchToProps = dispatch => ({
    handleClose: () => {
        dispatch(schedulesResetError());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorSnackbar);