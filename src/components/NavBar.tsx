import { Grid, GridItem, Image, Text, Link } from '@chakra-ui/react';
import React from 'react';

function NavBar(): React.ReactElement {
    return (
        <Grid 
            templateColumns="repeat(2, 1fr)" 
            p={6} 
            py={4} 
            w="full" 
            bg="inherit" 
            zIndex={50} 
        >
            <GridItem>
                <Link href="/" display="flex" alignItems="center" gap={2} mr={6} color="blue.950">
                    <Image src="https://image.similarpng.com/very-thumbnail/2020/08/kings-crown-logo-vector-PNG.png" alt="Logo" mr={2} boxSize="32px" />
                    <Text fontSize="xl" fontWeight="semibold" letterSpacing="tight">
                        Hotel Ranking
                    </Text>
                </Link>
            </GridItem>
            <GridItem justifySelf="end">
                <Link 
                    href="/admin" 
                    p={6} 
                    py={4} 
                    fontSize="lg" 
                    fontWeight="bold" 
                    border="0px solid" 
                    borderColor="blue.950" 
                    rounded="md" 
                    color="blue.950" 
                    _hover={{ color: 'blue.900' }}
                >
                    Admin
                </Link>
            </GridItem>
        </Grid>
    );
}

export default NavBar;

