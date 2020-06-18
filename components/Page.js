import Link from 'next/link';
import Clock from './Clock';
import AddCount from './AddCount';
import { connect } from 'react-redux';

function Page(props) {
    const { title, tick } = props;

    return (
        <div>
            <h1>{title}</h1>
            <Clock lastUpdate={tick.lastUpdate} light={tick.light} />
            <AddCount />
        </div>
    );
}

function mapStateToProps(state) {
    return { ...state, tick: state.tickReducer };
}

export default connect(mapStateToProps)(Page);
