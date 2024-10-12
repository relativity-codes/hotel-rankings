import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Heading, Text, Stack, Image } from '@chakra-ui/react';
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
        <Box p={6} className='flex flex-col gap-4 justify-center items-center w-full' mx="auto">
            <Box className='flex flex-row gap-4 justify-between items-center mr-auto w-full max-md:flex-wrap'>
                <Heading className='flex px-4' as="h1" size="lg">{hotel && hotel.name}</Heading>
                <Button onClick={goBack}>
                    Go Back
                </Button>
            </Box>
            {hotel ? (<Stack className='w-full' spacing={4}>
                {/* Image at the top */}
                <Image className='aspect-video min-h-[600px]' src={hotel.image} alt={hotel.name} borderRadius="md" mb={4} />
                <Text><strong>Address:</strong> {hotel.address}</Text>
                <Text><strong>City:</strong> {hotel.city}</Text>
                <Text><strong>Country:</strong> {hotel.country}</Text>
                <Text><strong>Brand:</strong> {hotel.brand}</Text>
                <Text><strong>Price:</strong> ${hotel.price}/night</Text>

                {/* Map at the bottom if location is available */}
                {hotel.location && (
                    <Box mt={4}>
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
            </Stack>) : <Box className='flex flex-row justify-center items-center'>
                Hotel Data not Found
            </Box>}
        </Box>
    );
};

