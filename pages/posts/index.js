import Layout from '../../components/Layout';

export default function Index(props) {
    return (
        <Layout title="Posts">
            <div className="container">
                {
                    props.posts.map(post => (
                        <div key={post.id}>
                            { post.title }
                        </div>
                    ))
                }
            </div>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const response = await fetch("http://localhost:8000/api/posts/");
    const posts = await response.json()
    
    return {
        props: {
            posts: posts.data
        }
    }
}

