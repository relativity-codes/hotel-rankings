import React, { useEffect, useState } from 'react';
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  Stack,
} from '@chakra-ui/react';
import { Hotel } from '../../../types';

interface HotelFormProps {
  hotel: Hotel | null; 
  onSubmit: (hotel: Hotel) => void; 
}

const HotelForm: React.FC<HotelFormProps> = ({ hotel, onSubmit }) => {
  const [formData, setFormData] = useState<Hotel>({
    id: 0,
    name: '',
    city: '',
    country: '',
    address: '',
    brand: '',
    image: '',
    price: 0,
  });

  useEffect(() => {
    if (hotel) {
      setFormData(hotel);
    }
  }, [hotel]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'price') {
      setFormData((prev) => ({ ...prev, [name]: parseFloat(value) })); 
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input name="name" value={formData.name} onChange={handleChange} />
      </FormControl>

      <FormControl>
        <FormLabel>City</FormLabel>
        <Input name="city" value={formData.city} onChange={handleChange} />
      </FormControl>

      <FormControl>
        <FormLabel>Country</FormLabel>
        <Input name="country" value={formData.country} onChange={handleChange} />
      </FormControl>

      <FormControl>
        <FormLabel>Address</FormLabel>
        <Input name="address" value={formData.address} onChange={handleChange} />
      </FormControl>

      <FormControl>
        <FormLabel>Brand</FormLabel>
        <Input name="brand" value={formData.brand} onChange={handleChange} />
      </FormControl>

      <FormControl>
        <FormLabel>Price</FormLabel>
        <Input name="price" type="number" value={formData.price} onChange={handleChange} />
      </FormControl>

      <FormControl>
        <FormLabel>Image URL</FormLabel>
        <Input name="image" value={formData.image} onChange={handleChange} />
      </FormControl>

      <Button colorScheme="blue" onClick={handleSubmit}>
        Submit
      </Button>
    </Stack>
  );
};

export default HotelForm;
