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
        <Grid p={6} mx="auto" width="100%">
            <GridItem rowGap={'16px'} width={'100%'} paddingY={'8px'}>
                <Grid templateColumns={'repeat(2, 1fr)'}>
                    <GridItem>
                        <Heading display={'flex'} paddingX={'8px'} as="h1" size="lg">{hotel && hotel.name}</Heading>
                    </GridItem>
                    <GridItem justifySelf={'end'}>
                        <Button display={'flex'} paddingX={'8px'} onClick={goBack}>
                            Go Back
                        </Button>
                    </GridItem>
                </Grid>
            </GridItem>
            {hotel ? (<Stack spacing={4} width="100%">
                <Image src={hotel.image} alt={hotel.name} borderRadius="md" mb={4} height="600px" objectFit="cover" />
                <Text><strong>Address:</strong> {hotel.address}</Text>
                <Text><strong>City:</strong> {hotel.city}</Text>
                <Text><strong>Country:</strong> {hotel.country}</Text>
                <Text><strong>Brand:</strong> {hotel.brand}</Text>
                <Text><strong>Price:</strong> ${hotel.price}/night</Text>

                {/* Map at the bottom if location is available */}
                {hotel.location && (
                    <Box width="100%" mt={4}>
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
            </Stack>) : <Box display="flex" justifyContent="center" alignItems="center" {...{rowSpan:11}}>
                Hotel Data not Found
            </Box>}
        </Grid>
    );
};

