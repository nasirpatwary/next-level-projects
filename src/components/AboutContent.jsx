import Link from 'next/link';
import React from 'react';

const AboutContent = () => {
    return (
        <div className='space-x-4'>
            <Link href={'/about/mission'} className='text-orange-300'>Mission</Link>
            <Link href={'/about/vission'} className='text-sky-400'>vission</Link>
        </div>
    );
};

export default AboutContent;