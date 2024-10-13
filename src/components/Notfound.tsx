import React from 'react';
import { Grid, GridItem, Text, Box } from '@chakra-ui/react';

function Notfound(): React.ReactElement {
    return (
        <Grid
            w="full"
            h="full"
            justifyContent="center"
            alignItems="center"
        >
            <GridItem>
                <Box
                    display="flex"
                    flexDirection="column"
                    gap={4}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text fontSize="3xl" fontWeight="extrabold">
                        404
                    </Text>
                    <Text fontSize="base">
                        Page Not Found
                    </Text>
                </Box>
            </GridItem>
        </Grid>
    );
}

export default Notfound;

