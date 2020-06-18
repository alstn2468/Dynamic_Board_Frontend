export const tickActionTypes = {
    TICK: 'TICK',
};

export function serverRenderClock(isServer) {
    return (dispatch) => {
        return dispatch({
            type: tickActionTypes.TICK,
            light: !isServer,
            ts: Date.now(),
        });
    };
}

export function startClock() {
    return (dispatch) => {
        return setInterval(
            () =>
                dispatch({
                    type: tickActionTypes.TICK,
                    light: true,
                    ts: Date.now(),
                }),
            1000
        );
    };
}
