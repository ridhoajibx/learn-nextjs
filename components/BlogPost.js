import Link from 'next/link';
import { useRouter } from 'next/router';
import { sliceUrl } from '../pages/api/sliceUrl';

const BlogPost = (props) => {
    const router = useRouter();
    return (
        <div>
            {
                props.data.map(post => (
                    <Link href={`/posts/${post.slug}`} key={post.id}>
                        <a className="block border-gray-500 hover:bg-blue-500 hover:text-white p-4 rounded shadow mb-4" key={post.id}>
                            {post.title}
                        </a>
                    </Link>
                ))
            }

            {
                props.pagination.map((link, id) => (
                    <button disabled={link.url === null && 'disabled'} onClick={() => router.push(`/posts/pages/${sliceUrl(link.url)}`)} key={id} dangerouslySetInnerHTML={{ __html: link.label }} className={`${link.active && `bg-blue-500 text-white border-blue:500 focus:outline-none focus:ring focus:ring-blue-200`} disabled:opacity-50 h-10 px-4 mx-1 rounded border`}>

                    </button>
                ))
            }
        </div>
    );
}

export default BlogPost;
