import React from 'react';
function Notfound(): React.ReactElement {
    return (
        <div className='flex flex-row justify-center items-center w-full h-full'>
            <div className='flex flex-col gap-4 justify-center items-center w-auto'>
                <p className='flex text-3xl font-extrabold'>404</p>
                <p className='flex text-base'>Page Not Found</p>
            </div>
        </div>
    )
}

export default Notfound
