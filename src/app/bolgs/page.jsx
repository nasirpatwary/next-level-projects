import React from 'react';

export const metadata = {
    title: "Bolgs",
    description: "Bolgs Page",
    keywords:["Bolgs", "Bolgs Page"]
  };

const getTime = async () =>{
    const res = await fetch('http://localhost:3000/time',{cache:"no-store"});
    const data = await res.json()
    return data.currentTime;
}

const BolgsPage = async () => {
    const times = await getTime()
    return (
        <div className='text-2xl'>
            This is Bolgs Page
          <h6 className='text-2xl text-orange-500 font-semibold'>{times}</h6>
        </div>
    );
};

export default BolgsPage;