import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

function NavBar(): React.ReactElement {
    return (
        <Grid 
            templateColumns="repeat(2, 1fr)" 
            p={6} py={4} w="full" 
            bg="inherit" className="z-50"
        >
            <GridItem>
                <a href="/" className="flex float-left flex-row flex-shrink gap-2 items-center mr-6 text-blue-950">
                    <img className='mr-2 w-8 h-8' src="https://image.similarpng.com/very-thumbnail/2020/08/kings-crown-logo-vector-PNG.png" />
                    <span className="text-xl font-semibold tracking-tight">Hotel Ranking</span>
                </a>
            </GridItem>
            <GridItem justifySelf="end">
                <a href="/admin" className="px-4 py-2 text-lg font-bold leading-none rounded-md border border-solid outline border-blue-950 text-blue-950 hover:text-blue-900 lg:mt-0">
                    Admin
                </a>
            </GridItem>
        </Grid>
    );
}

export default NavBar;

