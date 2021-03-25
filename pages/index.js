import Layout from "../components/Layout";

const Home = () => {
    return (
        <Layout title={process.env.appName}>
            <div className="container">
                <h1 className="font-bold text-5xl text-gray-800">Welcome to the Next JS Framework</h1>
            </div>
        </Layout>
    );
}

export default Home;
