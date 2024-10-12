export type Hotel = {
    id: number | string;
    name: string;
    city: string;
    country: string;
    address: string;
    brand: string;   
    image: string;  
    price: number;
    location?: {
        lat: number;
        lng: number;
      };
  };
  