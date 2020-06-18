import { useEffect } from 'react';
import { connect } from 'react-redux';
import Page from '../components/Page';
import { wrapper } from '../redux/store';
import { bindActionCreators } from 'redux';
import { serverRenderClock, startClock } from '../redux/tick/tickAction';
import { countPlusAction, countMinusAction } from '../redux/count/countAction';

async function wrapperStaticProps({ store }) {
    store.dispatch(serverRenderClock(true));
    store.dispatch(countPlusAction());
}

export const getStaticProps = wrapper.getStaticProps(wrapperStaticProps);

function Index(props) {
    useEffect(() => {
        const timer = props.startClock();

        return () => {
            clearInterval(timer);
        };
    }, [props]);

    return <Page title="Index Page" />;
}

function mapDispatchToProps(dispatch) {
    return {
        countPlusAction: bindActionCreators(countPlusAction, dispatch),
        countMinusAction: bindActionCreators(countMinusAction, dispatch),
        startClock: bindActionCreators(startClock, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(Index);
