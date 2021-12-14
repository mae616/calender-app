import { connect } from 'react-redux';

import { increment, decrement } from '../../redux/count/actions';

// View?表示要素
import Counter from "./presentation";

// storeからどのstateを引っ張ってくるかを定義
const mapStateProps = ({ count }) => ({ count });
// ↑同じ
// const mapStateProps = state => {
//     return { count: state.count };
// };

// どんなdispatcherをpropsに渡すのか
// このように定義してやることで、props.increment()と呼び出せるようになる。
const mapDispatchProps = dispatch => ({
    increment: count => {
        // 引数のdispatchにactionのincrementを実行した結果(action typeとpayloadのオブジェクト)を渡す
        dispatch(increment(count));
    },
    decrement: count => {
        dispatch(decrement(count));
    }
});

// ラップしたいコンポーネントをconnect関数に渡している（コンポーネントを返す関数）
export default connect(
    mapStateProps,
    mapDispatchProps)(Counter);

// export default Counter;
