import { tickActionTypes } from './tickAction';

const tickInitialState = {
    lastUpdate: 0,
    light: false,
};

function reducer(state = tickInitialState, action) {
    switch (action.type) {
        case tickActionTypes.TICK:
            return {
                ...state,
                lastUpdate: action.ts,
                light: !!action.light,
            };
        default:
            return state;
    }
}

export default reducer;
