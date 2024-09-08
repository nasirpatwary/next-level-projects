import { getPostId } from '@/services/postId';
import React from 'react';

export const  generateMetadata = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json()
    return {
        title: `${data.title}`,
        desciption:data.body,
        keywords: data.body
      }
}

const IdPage = async ({params}) => {
    const {title, body} = await getPostId(params.id)
    return (
        <div className='w-1/2 border p-4'>
            <p>Title : {title}</p>
            <p>Description : {body}</p>
        </div>
    );
};

export default IdPage;