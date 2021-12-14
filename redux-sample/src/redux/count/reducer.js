import { INCREMENT, DECREMENT } from "./constants";

const initState = 0;

// reducer
// state...直前のstate、action(action typeとpayloadのオブジェクト)
export const count = (state = initState, { type, payload }) => {
    // action typeで分岐
    switch (type) {
        case INCREMENT:
            // 直前のstate(直前の数) + payload(インクリメントする数)
            // 重要なのは、直接変更せずに、新しいstateを返している点
            // (redux でのルールなので必ず守る)
            return state + payload;
        case DECREMENT:
            return state - payload;
        default:
            return state;
    }
}