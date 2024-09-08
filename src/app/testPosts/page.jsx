

import { testGetPost } from '@/services/testGetPost';
import Link from 'next/link';
import React from 'react';

const TestPostsPage = async () => {
    const testPosts = await testGetPost()
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                testPosts?.slice(0, 25).map(({title, body, id}) => <div key={id} className='p-5 border space-y-2'>
                    <p>Title: {title}</p>
                    <p>Description: {body}</p>
                    <button className='border py-1 px-3 bg-teal-500 text-white rounded'><Link href={`/testPosts/${id}`}>More</Link></button>
                </div>)
            }
        </div>
    );
};

export default TestPostsPage;