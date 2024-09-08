import Meals from '@/components/Meals';
import React from 'react';


export const metadata = {
    title: "Meals",
    description: "Meals super metadata",
  };

const MealsPage = () => {
    return (
        <div className='bg-slate-500 p-10'>
            <h2 className='text-2xl font-semibold text-orange-500'>Choose Your Meals</h2>
            <p className='text-white/80'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <Meals />
        </div>
    );
};

export default MealsPage;