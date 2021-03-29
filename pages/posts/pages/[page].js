import Layout from '../../../components/Layout';
import BlogPost from '../../../components/BlogPost';

export default function Index({posts}) {
    return (
        <Layout title="Posts">
            <div className="container">
                <div className="flex">
                    <div className="w-1/2">
                        <BlogPost data={posts.data} pagination={ posts.meta.links } />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const getServerSideProps = async ({ params }) => {
    const response = await fetch(`http://localhost:8000/api/posts?page=${params.page}`);
    const posts = await response.json()

    return {
        props: {
            posts
        }
    }
}

