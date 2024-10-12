import { Grid, Box, Image, Text, Heading, VStack, HStack, Input, Select } from '@chakra-ui/react';
import React from 'react'
import { Hotel } from '../../types';
import { inithotels } from '../../initailHotelData';
import { useNavigate } from 'react-router-dom';

export default function index(): React.ReactElement {
    const [hotels, setHotels] = React.useState<Hotel[]>([])
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedBrand, setSelectedBrand] = React.useState('');
    const [filteredHotels, setFilteredHotels] = React.useState(hotels);
    const uniqueBrands = Array.from(new Set(hotels.map(hotel => hotel.brand)));

    const handleSearchAndFilter = () => {
        const query = searchQuery.toLowerCase();
        const filtered = hotels.filter((hotel) => {
            const matchesQuery =
                hotel.name.toLowerCase().includes(query) ||
                hotel.city.toLowerCase().includes(query) ||
                hotel.brand.toLowerCase().includes(query);
            const matchesBrand = selectedBrand ? hotel.brand === selectedBrand : true;
            return matchesQuery && matchesBrand;
        });
        if (filtered.length >= 1) {
            setFilteredHotels(filtered);
        } else {
            setFilteredHotels(hotels);
        }
    };

    const handleSearchChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchQuery(e.target.value);
        handleSearchAndFilter();
    };

    const handleBrandChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedBrand(e.target.value);
        handleSearchAndFilter();
    };

    React.useLayoutEffect(() => {
        const localHotel = localStorage.getItem('hotels')
        if (localHotel !== null && localHotel?.length > 0) {
            const retrievedHotel = JSON.parse(localHotel);
            setHotels(retrievedHotel);
            setFilteredHotels(retrievedHotel);
        } else {
            setHotels(inithotels);
            setFilteredHotels(inithotels);
            localStorage.setItem('hotels', JSON.stringify(inithotels));
        }
    }, []);

    return (
        <Box className='flex flex-col justify-center items-start py-4 w-full h-auto'>
            <Box padding={5} className='flex flex-row gap-4 justify-between items-center p-12 mr-auto w-full max-md:flex-wrap'>
                <Input
                    placeholder="Search by hotel name, city, or brand"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className='flex flex-grow h-12 rounded-md border border-gray-600 border-solid bg-inherit'
                    border={'1px'}
                />
                <Select
                    placeholder="Filter by Brand"
                    value={selectedBrand}
                    onChange={handleBrandChange}
                    className='flex flex-shrink w-96 h-12 rounded-md border-gray-600'
                    border={'1px'}
                >
                    {Array.isArray(uniqueBrands) &&
                        uniqueBrands.map((item, index) => <option key={index} value={item}>{item}</option>)
                    }
                    <option value=''>all</option>
                </Select>
            </Box>
            <Box className='flex flex-row items-center p-12 w-full h-auto justify-'>
                {filteredHotels.length >= 1 ? <Grid
                    className='w-full h-full'
                    templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
                    gap={6}
                    p={{ base: 4, md: 6 }}
                >

                    {filteredHotels.map((hotel, index) =>
                        <Item hotel={hotel} key={index} />
                    )}
                </Grid> :
                    <Box className='flex justify-center items-center w-full h-full min-h-96'>
                        <Box> No hotels available </Box>
                    </Box>
                }
            </Box>
        </Box>
    )
};


const Item = ({ hotel }: { hotel: Hotel }) => {
    const navigate = useNavigate();
    return (
        <Box
            onClick={() => navigate(`/hotel/${hotel?.id}`)}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
        >
            <Image src={hotel.image} alt={hotel.name} width="100%" height="200px" objectFit="cover" />

            <VStack align="start" p={4}>
                <Heading as="h3" size="md">{hotel.name}</Heading>
                <Text fontWeight="bold">{hotel.city}, {hotel.country}</Text>
                <Text fontSize="sm" color="gray.500">{hotel.address}</Text>
                <HStack justifyContent="space-between" w="100%">
                    <Text fontWeight="bold" fontSize="lg">${hotel.price}/night</Text>
                    {/* <Text fontSize="sm" color="blue.500">View on map</Text> */}
                </HStack>
            </VStack>
        </Box>
    )
} 