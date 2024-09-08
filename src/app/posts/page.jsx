
import { getPosts } from '@/services/getPostsApi';
import Link from 'next/link';
import React from 'react';

const PostsPage = async () => {
    const posts = await getPosts()
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4"> 
            {
                posts?.slice(0, 32)?.map(({title, body, id}) => <div key={id} className="border rounded space-y-2 p-5 bg-sky-300/20 text-gray-600">
                    <p><span className='text-xl font-semibold text-orange-500'>Title</span> : {title} </p>
                    <p><span className='text-xl font-semibold text-orange-500'>Description</span>  {body?.slice(0, 100) + "...."} </p>
                    <button className='border px-3 py-1 text-white rounded bg-green-400'><Link href={`/posts/${id}`}>See All</Link></button>
                </div>)
            }
        </div>
    );
};

export default PostsPage;