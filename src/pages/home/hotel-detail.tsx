import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Heading, Text, Stack, Image, Grid, GridItem } from '@chakra-ui/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Hotel } from '../../types';



export default function HotelDetail(): React.ReactElement {
    const { id } = useParams<{ id: string }>();
    const [hotels, setHotels] = React.useState<Hotel[]>([])
    const navigate = useNavigate();
    const hotel = hotels.find((h: Hotel) => h.id === parseInt(id as string));
    React.useLayoutEffect(() => {
        const localHotel = localStorage.getItem('hotels');
        if (localHotel !== null && localHotel.length > 0) {
            const retrievedHotel = JSON.parse(localHotel);
            setHotels(retrievedHotel);
        }
    }, []);

    const goBack = () => {
        navigate(-1);
    };

    return (
        <Grid p={6} className='grid gap-6 w-full grid-row-12' mx="auto">
            <GridItem rowSpan={1} className='row-span-1 gap-4 py-2 w-full'>
                <Grid templateColumns={'repeat(2, 1fr)'}>
                    <GridItem>
                        <Heading className='flex px-2' as="h1" size="lg">{hotel && hotel.name}</Heading>
                    </GridItem>
                    <GridItem justifySelf={'end'}>
                        <Button className='flex px-2' onClick={goBack}>
                            Go Back
                        </Button>
                    </GridItem>
                </Grid>
            </GridItem>
            {hotel ? (<Stack className='w-full row-span-11' spacing={4}>
                {/* Image at the top */}
                <Image className='aspect-video min-h-[600px] w-full' src={hotel.image} alt={hotel.name} borderRadius="md" mb={4} />
                <Text><strong>Address:</strong> {hotel.address}</Text>
                <Text><strong>City:</strong> {hotel.city}</Text>
                <Text><strong>Country:</strong> {hotel.country}</Text>
                <Text><strong>Brand:</strong> {hotel.brand}</Text>
                <Text><strong>Price:</strong> ${hotel.price}/night</Text>

                {/* Map at the bottom if location is available */}
                {hotel.location && (
                    <Box className='w-full' mt={4}>
                        <Heading as="h2" size="md" mb={2}>Location: </Heading>
                        <MapContainer
                            {...{
                                center: [hotel.location.lat, hotel.location.lng],
                                zoom: 70
                            }}
                            style={{ height: '600px', width: '100%' }}
                        >
                            <TileLayer
                                {...{
                                    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                                    attribution: "&copy; OpenStreetMap contributors"
                                }}
                            />
                            <Marker position={[hotel.location.lat, hotel.location.lng]}>
                                <Popup>
                                    {hotel.name} - {hotel.address}
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </Box>
                )}
            </Stack>) : <Box className='flex flex-row justify-center items-center row-span-11'>
                Hotel Data not Found
            </Box>}
        </Grid>
    );
};

