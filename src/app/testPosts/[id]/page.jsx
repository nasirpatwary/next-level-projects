import { getTestPostsId } from '@/services/getTestId';
import React from 'react';
export const generateMetadata = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json()
    return {
      title: `${data.title}`,
      desctiption: data.dody,
      keywords: data.dody
    }
  }
const TestPostId = async ({params}) => {
    const {title, body} = await getTestPostsId(params.id)
    return (
        <div className='border-2 w-1/2 p-4 border-orange-500'>
            <p>Title: {title}</p>
            <p>Description: {body}</p>
        </div>
    );
};

export default TestPostId;