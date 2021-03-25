import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Index(props) {
    return (
        <Layout title="Posts">
            <div className="container">
                <div className="flex">
                    <div className="w-1/2">
                        {
                            props.posts.map(post => (
                                <Link href={`/posts/${post.slug}`} key={post.id}>
                                    <a className="block border-gray-500 hover:bg-blue-500 hover:text-white p-4 rounded shadow mb-2" key={post.id}>
                                        { post.title}
                                    </a>
                                </Link>
                            ))
                        }
                    </div>
                </div>
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

