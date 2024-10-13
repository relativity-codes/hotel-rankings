import { CircularProgress, Grid, GridItem, Box } from '@chakra-ui/react';
import React from 'react';

function Loading(): React.ReactElement {
    return (
        <Grid
            w="full"
            h="full"
            minH="70vh"
            templateRows="1fr"
            justifyContent="center"
            alignItems="center"
        >
            <GridItem>
                <Box display="flex" flexDirection="row" gap={4} justifyContent="center" alignItems="center">
                    <CircularProgress isIndeterminate color="green.300" />
                </Box>
            </GridItem>
        </Grid>
    );
}

export default Loading;
