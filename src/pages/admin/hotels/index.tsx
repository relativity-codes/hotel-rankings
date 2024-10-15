import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from '@chakra-ui/react';
import { Hotel } from '../../../types';
import HotelForm from './hotel-form';
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';

export default function HotelList(): React.ReactElement {
  const [hotels, setHotels] = React.useState<Hotel[]>([]);
  const [selectedHotel, setSelectedHotel] = React.useState<Hotel | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    const localHotel = localStorage.getItem('hotels');
    if (localHotel !== null && localHotel.length > 0) {
      const retrievedHotel = JSON.parse(localHotel);
      setHotels(retrievedHotel);
    }
  }, []);

  const handleAdd = () => {
    setSelectedHotel(null);
    onOpen();
  };

  const handleEdit = (hotel: Hotel) => {
    setSelectedHotel(hotel);
    onOpen();
  };

  const handleDelete = (hotel: Hotel) => {
    const updatedHotels = hotels.filter(h => h !== hotel);
    setHotels(updatedHotels);
    localStorage.setItem('hotels', JSON.stringify(updatedHotels));
  };

  const handleSubmit = (hotel: Hotel) => {
    if (selectedHotel) {
      const updatedHotels = hotels.map(h =>
        h === selectedHotel ? hotel : h
      );
      setHotels(updatedHotels);
      localStorage.setItem('hotels', JSON.stringify(updatedHotels));
    } else {
      const updatedHotels = [...hotels, {...hotel, id:hotels.length + 1}];
      localStorage.setItem('hotels', JSON.stringify(updatedHotels));
      setHotels(updatedHotels);
    }
    onClose();
  };

  return (
    <Box p={6} borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Button leftIcon={<AddIcon />} onClick={handleAdd} mb={4}>
        Add Hotel
      </Button>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>City</Th>
            <Th>Country</Th>
            <Th>Address</Th>
            <Th>Brand</Th>
            <Th>Price ($)</Th>
            <Th>Image</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {hotels.map((hotel, index) => (
            <Tr key={index}>
              <Td>{hotel.name}</Td>
              <Td>{hotel.city}</Td>
              <Td>{hotel.country}</Td>
              <Td>{hotel.address}</Td>
              <Td>{hotel.brand}</Td>
              <Td>{hotel.price}</Td>
              <Td>
                <img src={hotel.image} alt={hotel.name} width="50" />
              </Td>
              <Td>
                <Button mr={2} onClick={() => handleEdit(hotel)}>
                  <EditIcon />
                </Button>
                <Button onClick={() => handleDelete(hotel)}>
                  <DeleteIcon />
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Drawer for adding/editing hotel */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          maxWidth={{ base: '100%', md: '900px' }}
          width="100%"
        >
          <DrawerHeader display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Box className='flex'>{selectedHotel ? 'Edit Hotel' : 'Add New Hotel'} </Box>
            <Button className='flex' variant={'outline'} onClick={onClose}>
              Close Drawer
            </Button>
          </DrawerHeader>
          <DrawerBody>
            <HotelForm hotel={selectedHotel} onSubmit={handleSubmit} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
