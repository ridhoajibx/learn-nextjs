import Layout from "../components/Layout";

const Home = () => {
    return (
        <Layout title={ process.env.appName }>
            <h1 className="font-bold text-5xl text-gray-800">
                This is home page
            </h1>
        </Layout>
    );
}

export default Home;
