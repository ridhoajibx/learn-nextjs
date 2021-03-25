import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Show({ post }) {

    const router = useRouter();
    const { slug } = router.query
    console.log(post);
    return (
        <Layout title="Posts">
            <div className="container">
                <div>
                    <h3 className="font-bold text-2xl border-b pb-2">
                        { post.title }
                    </h3>
                    <div className="py-4">
                        { post.body }
                    </div>
                    <div>
                        Author : <strong>{ post.user.name }</strong>
                    </div>
                    <div>
                        Published on <strong>{ post.created_at }</strong>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const response = await fetch("http://localhost:8000/api/posts/");
    const posts = await response.json()

    const paths = posts.data.map((post) => (
        {
            params: { slug: post.slug }
        }
    ));

    return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
    const response = await fetch(`http://localhost:8000/api/posts/${context.params.slug}`);
    const post = await response.json()

    return {
        props: {
            post: post.data
        }
    }
}