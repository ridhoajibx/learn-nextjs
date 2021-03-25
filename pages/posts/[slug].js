import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Show() {

    const router = useRouter();
    const { slug } = router.query
    console.log(slug);
    return (
        <Layout title="Posts">
            <div className="container">
                This wildcard is : {slug}
            </div>
        </Layout>
    )
}
