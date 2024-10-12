import { Hotel } from "./types";

export const inithotels: Hotel[] = [
    // Brand: Marriott
    {
        id:1,
        name: "Marriott Marquis",
        city: "New York",
        country: "USA",
        address: "1535 Broadway",
        brand: "Marriott",
        image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2020/07/gettyimages-1204811865-612x612-1.jpg",
        price: 350,
        location: { lat: 40.758896, lng: -73.985130 }
    },
    {
        id:2,
        name: "Marriott Berlin",
        city: "Berlin",
        country: "Germany",
        address: "Inge-Beisheim-Platz 1",
        brand: "Marriott",
        image: "https://img.freepik.com/premium-photo/interior-mock-up-with-zen-bed-plant-decoartion-japanese-green-bedroom-3d-rendering_43151-7249.jpg",
        price: 220,
        location: { lat: 52.513430, lng: 13.379890 }
    },
    {
        id:3,
        name: "Marriott Tokyo",
        city: "Tokyo",
        country: "Japan",
        address: "4-7-36 Kita-Shinagawa",
        brand: "Marriott",
        image: "https://promos.makemytrip.com/AltAcco/images/hotel.png",
        price: 300,
        location: { lat: 35.619436, lng: 139.738804 }
    },

    // Brand: Hilton
    {
        id:4,
        name: "Hilton London Kensington",
        city: "London",
        country: "UK",
        address: "179-199 Holland Park Ave",
        brand: "Hilton",
        image: "https://promos.makemytrip.com/AltAcco/images/villa.png",
        price: 250,
        location: { lat: 51.503240, lng: -0.208700 }
    },
    {
        id:5,
        name: "Hilton Paris Opera",
        city: "Paris",
        country: "France",
        address: "108 Rue Saint-Lazare",
        brand: "Hilton",
        image: "https://promos.makemytrip.com/AltAcco/images/home-stay.png",
        price: 275,
        location: { lat: 48.875824, lng: 2.325444 }
    },
    {
        id:6,
        name: "Hilton Singapore Orchard",
        city: "Singapore",
        country: "Singapore",
        address: "333 Orchard Rd",
        brand: "Hilton",
        image: "https://promos.makemytrip.com/AltAcco/images/apartment.png",
        price: 320,
        location: { lat: 1.302933, lng: 103.835358 }
    },

    // Brand: Four Seasons
    {
        id:7,
        name: "Four Seasons Hotel Los Angeles",
        city: "Los Angeles",
        country: "USA",
        address: "300 S Doheny Dr",
        brand: "Four Seasons",
        image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2020/07/gettyimages-1204811865-612x612-1.jpg",
        price: 450,
        location: { lat: 34.073700, lng: -118.389490 }
    },
    {
        id:8,
        name: "Four Seasons Sydney",
        city: "Sydney",
        country: "Australia",
        address: "199 George St",
        brand: "Four Seasons",
        image: "https://promos.makemytrip.com/AltAcco/images/beach-hut.png",
        price: 400,
        location: { lat: -33.861282, lng: 151.210798 }
    },
    {
        id:9,
        name: "Four Seasons Milan",
        city: "Milan",
        country: "Italy",
        address: "Via Gesù, 6/8",
        brand: "Four Seasons",
        image: "https://img.freepik.com/premium-photo/interior-mock-up-with-zen-bed-plant-decoartion-japanese-green-bedroom-3d-rendering_43151-7249.jpg",
        price: 500,
        location: { lat: 45.468719, lng: 9.196290 }
    },

    // Brand: Hyatt
    {
        id:10,
        name: "Hyatt Regency Chicago",
        city: "Chicago",
        country: "USA",
        address: "151 E Wacker Dr",
        brand: "Hyatt",
        image: "https://promos.makemytrip.com/AltAcco/images/beach-hut.png",
        price: 280,
        location: { lat: 41.887514, lng: -87.621900 }
    },
    {
        id:11,
        name: "Hyatt Regency Dubai",
        city: "Dubai",
        country: "UAE",
        address: "Deira Corniche",
        brand: "Hyatt",
        image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2020/07/gettyimages-1204811865-612x612-1.jpg",
        price: 330,
        location: { lat: 25.282202, lng: 55.330801 }
    },
    {
        id:12,
        name: "Hyatt Regency Bangkok",
        city: "Bangkok",
        country: "Thailand",
        address: "1 Sukhumvit Rd",
        brand: "Hyatt",
        image: "https://promos.makemytrip.com/AltAcco/images/villa.png",
        price: 310,
        location: { lat: 13.746520, lng: 100.534370 }
    },

    // Brand: InterContinental
    {
        id:13,
        name: "InterContinental New York Barclay",
        city: "New York",
        country: "USA",
        address: "111 E 48th St",
        brand: "InterContinental",
        image: "https://img.freepik.com/premium-photo/interior-mock-up-with-zen-bed-plant-decoartion-japanese-green-bedroom-3d-rendering_43151-7249.jpg",
        price: 370,
        location: { lat: 40.755674, lng: -73.973452 }
    },
    {
        id:14,
        name: "InterContinental Geneva",
        city: "Geneva",
        country: "Switzerland",
        address: "7-9 Chemin du Petit-Saconnex",
        brand: "InterContinental",
        image: "https://promos.makemytrip.com/AltAcco/images/beach-hut.png",
        price: 420,
        location: { lat: 46.226940, lng: 6.136720 }
    },
    {
        id:15,
        name: "InterContinental Bali",
        city: "Bali",
        country: "Indonesia",
        address: "Jalan Uluwatu",
        brand: "InterContinental",
        image: "https://promos.makemytrip.com/AltAcco/images/villa.png",
        price: 340,
        location: { lat: -8.772109, lng: 115.166200 }
    }
];