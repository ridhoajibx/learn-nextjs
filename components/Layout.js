import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel='icon' href='https://tailwindcss.com/favicon-32x32.png' />
            </Head>
            <div>
                <Navbar />
                { props.children }
            </div>
        </div>
    );
}

export default Layout;
