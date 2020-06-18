import { COUNT_PLUS, COUNT_MINUS } from './countAction';

const countInitialState = {
    count: 0,
};

function reducer(state = countInitialState, action) {
    switch (action.type) {
        case COUNT_PLUS:
            return {
                count: state.count + 1,
            };
        case COUNT_MINUS:
            return {
                count: state.count - 1,
            };
        default:
            return state;
    }
}

export default reducer;
