import App from 'next/app';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../store/store';
import Layout from '../components/Layout';
import Head from 'next/head'
import '../styles/styles.css';


class MyApp extends App{

    render(){
        const { Component, pageProps } = this.props;

        return(
            <Provider store={store}>
                <Head>
                    <title>Mi Aplicacion</title>
                    <meta charSet="UTF-8"/>
                    <meta name="description" content="Web App para api NextJS"/>
                    <meta name="keywords" content="api-mi-tiendita-web"/>
                    <meta name="author" content="elgael06@gmail.com"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </Head>
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

