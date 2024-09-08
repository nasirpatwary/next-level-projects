import Link from 'next/link';
import React from 'react';

const SubAboutPage = () => {
    return (
        <div>
           {
            fakeData.map((data) => <div key={data.id} className='p-10 border space-y-2'>
                <p>Id: {data.id} </p>
                <p>Title: {data.title} </p>
                <p>Description: {data.description} </p>
                <button className='border bg-green-500 text-white py-1 px-3 rounded-lg'><Link href={`/about/subAbout/${data.id}`}>Sub Details</Link></button>
            </div>)
           } 
        </div>
    );
};
const fakeData = [
    {
        id: "1a2b3c4d5e6f7g8h9i0j",
        title: "Waterproof Recycled Jacket",
        description: "A high-quality, waterproof jacket made from recycled materials. Perfect for outdoor adventures."
    },
    {
        id: "2b3c4d5e6f7g8h9i0j1k",
        title: "Adjustable Laptop Stand",
        description: "A sleek and modern laptop stand, adjustable to multiple angles. Ideal for working from home."
    },
    {
        id: "3c4d5e6f7g8h9i0j1k2l",
        title: "Handcrafted Ceramic Mugs",
        description: "A set of handcrafted ceramic mugs with a minimalist design. Available in multiple colors."
    },
    {
        id: "4d5e6f7g8h9i0j1k2l3m",
        title: "Stainless Steel Water Bottle",
        description: "A durable, stainless steel water bottle that keeps drinks cold for up to 24 hours."
    },
    {
        id: "5e6f7g8h9i0j1k2l3m4n",
        title: "Ergonomic Wireless Mouse",
        description: "A premium wireless mouse with ergonomic design, offering customizable buttons and long battery life."
    }
];
export default SubAboutPage;