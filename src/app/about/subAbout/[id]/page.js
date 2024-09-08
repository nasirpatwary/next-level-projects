import React from 'react';

const SlugSubAboutPage = ({params}) => {
    console.log(params.id);
    const {title, description} = fakeData.find((data) => data.id === params.id)
    return (
        <div>
            <p>Title: <span className='text-orange-500'>{title}</span></p>
            <p>Description: <span className='text-sky-500'>{description}</span></p>
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
export default SlugSubAboutPage;