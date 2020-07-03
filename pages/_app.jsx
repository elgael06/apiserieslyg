import App from 'next/app';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../store/store';
import Layout from './components/Layout';

class MyApp extends App{

    render(){
        const { Component, pageProps } = this.props;

        return(
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps}>  </Component>
                </Layout>
            </Provider>
        );
    }
}

const makeStore = ()=> store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);

