import React from 'react';
function NavBar(): React.ReactElement {
    return (
        <div className="flex z-50 flex-row flex-wrap justify-between items-center p-6 py-4 w-full border-t-0 border-b border-solid border-x-0 bg-inherit border-blue-950">
            <div className="flex flex-row w-auto">
                <a href="/" className="flex flex-row flex-shrink gap-2 items-center mr-6 text-blue-950">
                    <img className='mr-2 w-8 h-8' src="https://image.similarpng.com/very-thumbnail/2020/08/kings-crown-logo-vector-PNG.png" />
                    <span className="text-xl font-semibold tracking-tight">Hotel Ranking</span>
                </a>
            </div>
            <div className="flex flex-row w-auto">
                <a href="/admin" className="px-4 py-2 text-lg font-bold leading-none rounded-md border border-solid outline border-blue-950 text-blue-950 hover:text-blue-900 lg:mt-0">
                    Admin
                </a>
            </div>
        </div>
    )
}

export default NavBar
