import React from 'react';
import { Grid, GridItem} from '@chakra-ui/react';
import NavBar from './NavBar';

function Layout({ children }: React.PropsWithChildren): React.ReactElement {
    return (
        <Grid
            templateRows="auto 1fr"
            w="100vw"
            h="100vh"
            backgroundColor={'rgb(226 232 240 / 1)'}
        >
            <GridItem>
                <NavBar />
            </GridItem>
            <GridItem
                overflowY="auto" 
                pt={2}
                w="full"
                h="calc(100vh - 80px)"
            >
                {children}
            </GridItem>
        </Grid>
    );
}

export default Layout;
