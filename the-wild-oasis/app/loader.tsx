import Spinner from '@/app/components/Spinner';
import React from 'react';

const Loader = () => {
    return (
        <div className='min-h-screen flex items-center justify-center' >
             <Spinner />
        </div>
    );
}

export default Loader;
