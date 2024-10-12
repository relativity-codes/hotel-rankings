import {CircularProgress } from '@chakra-ui/react';
import React from 'react';
function Loading(): React.ReactElement {
    return (
        <div className='w-full h-full min-h-[70vh] flex flex-col justify-center items-center'>
            <div className='flex flex-row gap-4 justify-center items-center w-auto'>
                <CircularProgress isIndeterminate color='green.300' />
            </div>
        </div>
    )
}

export default Loading
