import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
    return (
        <div>
            This is my Gallery page
            <div className='grid grid-cols-3 gap-3'>
                {
                    [2,3,4,5,6,2]?.map((img) => <div key={img}>
                        <Image src={`/images/${img}.jpg`} alt='Picture' width={1920} height={1080}/>
                    </div>)
                }
            </div>
        </div>
    );
};

export default GalleryPage;