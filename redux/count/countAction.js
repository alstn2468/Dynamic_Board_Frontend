export const COUNT_PLUS = 'COUNT_PLUS';
export const COUNT_MINUS = 'COUNT_MINUS';

export function countPlusAction() {
    return (dispatch) => {
        return dispatch({
            type: COUNT_PLUS,
        });
    };
}

export function countMinusAction() {
    return (dispatch) => {
        return dispatch({
            type: COUNT_MINUS,
        });
    };
}
