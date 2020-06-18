import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { countPlusAction, countMinusAction } from '../redux/count/countAction';

function AddCount({ count, countPlusAction, countMinusAction }) {
    return (
        <div>
            <style jsx>{`
                div {
                    padding: 0 0 20px 0;
                }
            `}</style>
            <h1>
                COUNT: <span>{count}</span>
            </h1>
            <button onClick={countPlusAction}>Add To Count</button>
            <button onClick={countMinusAction}>Sub To Count</button>
        </div>
    );
}

function mapStateToProps(state) {
    return { count: state.countReducer.count };
}

function mapDispatchToProps(dispatch) {
    return {
        countPlusAction: bindActionCreators(countPlusAction, dispatch),
        countMinusAction: bindActionCreators(countMinusAction, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCount);
