
import { Car } from "../types/car";

export const carsData: Car[] = [
  {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    price: 25000,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 40,
    engineCapacity: 2.5,
    features: ["Leather Seats", "Navigation", "Sunroof", "Adaptive Cruise Control", "Lane Departure Warning"],
    colors: ["White", "Black", "Silver", "Red"],
    images: [
      "/images/toyota-camry-1.jpg",
      "/images/toyota-camry-2.jpg",
      "/images/toyota-camry-3.jpg"
    ],
    description: "The Toyota Camry is a midsize car that offers a comfortable ride, good fuel economy, and a spacious interior. The hybrid model is particularly efficient, making it a great choice for commuters."
  },
  {
    id: 2,
    brand: "Honda",
    model: "Accord",
    year: 2023,
    price: 28000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 35,
    engineCapacity: 1.5,
    features: ["Apple CarPlay", "Android Auto", "Heated Seats", "Blind Spot Monitoring", "Wireless Charging"],
    colors: ["Blue", "Black", "White", "Gray"],
    images: [
      "/images/honda-accord-1.jpg",
      "/images/honda-accord-2.jpg",
      "/images/honda-accord-3.jpg"
    ],
    description: "The Honda Accord is a reliable and fuel-efficient midsize sedan that offers plenty of tech features and a comfortable ride. It's consistently rated as one of the best cars in its class."
  },
  {
    id: 3,
    brand: "BMW",
    model: "3 Series",
    year: 2022,
    price: 45000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 30,
    engineCapacity: 2.0,
    features: ["Sport Mode", "Premium Sound System", "Panoramic Sunroof", "Leather Seats", "Parking Assistant"],
    colors: ["Black", "White", "Blue", "Gray"],
    images: [
      "/images/bmw-3-series-1.jpg",
      "/images/bmw-3-series-2.jpg",
      "/images/bmw-3-series-3.jpg"
    ],
    description: "The BMW 3 Series is a luxury compact sports sedan known for its dynamic handling, powerful engines, and premium interior. It offers a perfect blend of performance and comfort."
  },
  {
    id: 4,
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 55000,
    fuelType: "Electric",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 330,
    engineCapacity: 0,
    features: ["Autopilot", "Glass Roof", "Minimalist Interior", "Premium Sound System", "Supercharger Access"],
    colors: ["Red", "White", "Black", "Blue"],
    images: [
      "/images/tesla-model-3-1.jpg",
      "/images/tesla-model-3-2.jpg",
      "/images/tesla-model-3-3.jpg"
    ],
    description: "The Tesla Model 3 is an all-electric sedan with impressive range and performance. It features cutting-edge technology, including Tesla's Autopilot system for semi-autonomous driving."
  },
  {
    id: 5,
    brand: "Ford",
    model: "F-150",
    year: 2022,
    price: 35000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 6,
    mileage: 25,
    engineCapacity: 3.5,
    features: ["Towing Package", "4x4", "Touchscreen Display", "Apple CarPlay", "360-Degree Camera"],
    colors: ["Blue", "Black", "Silver", "Red"],
    images: [
      "/images/ford-f150-1.jpg",
      "/images/ford-f150-2.jpg",
      "/images/ford-f150-3.jpg"
    ],
    description: "The Ford F-150 is a full-size pickup truck known for its powerful engines, towing capability, and innovative features. It's been America's best-selling vehicle for decades."
  },
  {
    id: 6,
    brand: "Chevrolet",
    model: "Tahoe",
    year: 2023,
    price: 60000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 8,
    mileage: 22,
    engineCapacity: 5.3,
    features: ["Third Row Seating", "4WD", "Premium Sound System", "Rear Entertainment System", "Adaptive Suspension"],
    colors: ["Black", "White", "Silver", "Gray"],
    images: [
      "/images/chevrolet-tahoe-1.jpg",
      "/images/chevrolet-tahoe-2.jpg",
      "/images/chevrolet-tahoe-3.jpg"
    ],
    description: "The Chevrolet Tahoe is a large SUV with seating for up to eight passengers. It offers plenty of cargo space, powerful engines, and a comfortable ride. Perfect for family road trips."
  },
  {
    id: 7,
    brand: "Audi",
    model: "Q5",
    year: 2022,
    price: 48000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 28,
    engineCapacity: 2.0,
    features: ["Quattro All-Wheel Drive", "Panoramic Sunroof", "Virtual Cockpit", "Bang & Olufsen Sound", "Heated Seats"],
    colors: ["Blue", "Black", "White", "Silver"],
    images: [
      "/images/audi-q5-1.jpg",
      "/images/audi-q5-2.jpg",
      "/images/audi-q5-3.jpg"
    ],
    description: "The Audi Q5 is a luxury compact SUV that combines performance, technology, and comfort. It features Audi's renowned Quattro all-wheel drive system and elegant interior design."
  },
  {
    id: 8,
    brand: "Toyota",
    model: "RAV4",
    year: 2023,
    price: 30000,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 38,
    engineCapacity: 2.5,
    features: ["All-Wheel Drive", "Safety Sense Package", "Apple CarPlay", "Android Auto", "Blind Spot Monitoring"],
    colors: ["Green", "White", "Black", "Blue"],
    images: [
      "/images/toyota-rav4-1.jpg",
      "/images/toyota-rav4-2.jpg",
      "/images/toyota-rav4-3.jpg"
    ],
    description: "The Toyota RAV4 is a compact SUV with available hybrid powertrain that delivers excellent fuel economy. It's practical, reliable, and offers plenty of advanced safety features."
  },
  {
    id: 9,
    brand: "Mercedes-Benz",
    model: "E-Class",
    year: 2022,
    price: 65000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 25,
    engineCapacity: 3.0,
    features: ["MBUX Infotainment", "Burmester Sound System", "Air Suspension", "Driver Assistance Package", "Heads-Up Display"],
    colors: ["Black", "Silver", "White", "Blue"],
    images: [
      "/images/mercedes-e-class-1.jpg",
      "/images/mercedes-e-class-2.jpg",
      "/images/mercedes-e-class-3.jpg"
    ],
    description: "The Mercedes-Benz E-Class is a luxury midsize sedan that offers a perfect blend of comfort, technology, and performance. Its interior is one of the most luxurious in its class."
  },
  {
    id: 10,
    brand: "Kia",
    model: "Telluride",
    year: 2023,
    price: 42000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 8,
    mileage: 24,
    engineCapacity: 3.8,
    features: ["Three-Row Seating", "10.25-inch Touchscreen", "Apple CarPlay", "Android Auto", "Harman Kardon Audio"],
    colors: ["Dark Moss", "Black", "White", "Burgundy"],
    images: [
      "/images/kia-telluride-1.jpg",
      "/images/kia-telluride-2.jpg",
      "/images/kia-telluride-3.jpg"
    ],
    description: "The Kia Telluride is a midsize SUV with three rows of seating and an upscale interior. It offers a smooth ride, plenty of cargo space, and a comprehensive suite of safety features."
  },
  {
    id: 11,
    brand: "Hyundai",
    model: "Tucson",
    year: 2022,
    price: 32000,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 36,
    engineCapacity: 1.6,
    features: ["Panoramic Sunroof", "Digital Instrument Cluster", "Wireless Charging", "Smart Cruise Control", "Remote Smart Parking Assist"],
    colors: ["Blue", "Silver", "Black", "White"],
    images: [
      "/images/hyundai-tucson-1.jpg",
      "/images/hyundai-tucson-2.jpg",
      "/images/hyundai-tucson-3.jpg"
    ],
    description: "The Hyundai Tucson is a compact SUV with bold styling and available hybrid powertrains. It features a futuristic interior design with plenty of tech features and good fuel economy."
  },
  {
    id: 12,
    brand: "Subaru",
    model: "Outback",
    year: 2023,
    price: 35000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 29,
    engineCapacity: 2.5,
    features: ["Standard All-Wheel Drive", "11.6-inch Touchscreen", "EyeSight Driver Assist", "X-MODE Off-Road", "Power Liftgate"],
    colors: ["Green", "Blue", "White", "Silver"],
    images: [
      "/images/subaru-outback-1.jpg",
      "/images/subaru-outback-2.jpg",
      "/images/subaru-outback-3.jpg"
    ],
    description: "The Subaru Outback is a wagon-like crossover that offers standard all-wheel drive, generous ground clearance, and a comfortable interior. It's perfect for outdoor adventures."
  },
  {
    id: 13,
    brand: "Lexus",
    model: "RX",
    year: 2022,
    price: 52000,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 31,
    engineCapacity: 3.5,
    features: ["Mark Levinson Audio", "Heads-Up Display", "Panoramic View Monitor", "Adaptive Variable Suspension", "Power Folding Rear Seats"],
    colors: ["Red", "Black", "White", "Silver"],
    images: [
      "/images/lexus-rx-1.jpg",
      "/images/lexus-rx-2.jpg",
      "/images/lexus-rx-3.jpg"
    ],
    description: "The Lexus RX is a luxury midsize SUV known for its comfortable ride, plush interior, and refined hybrid powertrain. It offers excellent build quality and reliability."
  },
  {
    id: 14,
    brand: "Nissan",
    model: "Rogue",
    year: 2023,
    price: 29000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 33,
    engineCapacity: 2.5,
    features: ["ProPILOT Assist", "Divide-N-Hide Cargo System", "Bose Premium Audio", "Wireless Apple CarPlay", "360-Degree Camera"],
    colors: ["Orange", "Black", "White", "Gray"],
    images: [
      "/images/nissan-rogue-1.jpg",
      "/images/nissan-rogue-2.jpg",
      "/images/nissan-rogue-3.jpg"
    ],
    description: "The Nissan Rogue is a compact SUV with a spacious interior and generous cargo capacity. It features a comfortable ride and plenty of standard safety technology."
  },
  {
    id: 15,
    brand: "Volkswagen",
    model: "ID.4",
    year: 2022,
    price: 45000,
    fuelType: "Electric",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 280,
    engineCapacity: 0,
    features: ["ID. Light", "Massage Seats", "Panoramic Glass Roof", "Travel Assist", "Augmented Reality HUD"],
    colors: ["Blue", "White", "Black", "Gray"],
    images: [
      "/images/volkswagen-id4-1.jpg",
      "/images/volkswagen-id4-2.jpg",
      "/images/volkswagen-id4-3.jpg"
    ],
    description: "The Volkswagen ID.4 is an all-electric compact SUV with impressive range and spacious interior. It offers a comfortable ride and plenty of technology features."
  },
  {
    id: 16,
    brand: "Mazda",
    model: "CX-5",
    year: 2023,
    price: 33000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 30,
    engineCapacity: 2.5,
    features: ["G-Vectoring Control", "Nappa Leather", "Bose 10-Speaker Audio", "Active Driving Display", "360-Degree View Monitor"],
    colors: ["Red", "Blue", "White", "Black"],
    images: [
      "/images/mazda-cx5-1.jpg",
      "/images/mazda-cx5-2.jpg",
      "/images/mazda-cx5-3.jpg"
    ],
    description: "The Mazda CX-5 is a compact SUV known for its upscale interior and fun-to-drive nature. It offers sharp handling, a comfortable ride, and premium features at a competitive price."
  },
  {
    id: 17,
    brand: "Jeep",
    model: "Grand Cherokee",
    year: 2022,
    price: 45000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 26,
    engineCapacity: 3.6,
    features: ["Quadra-Lift Air Suspension", "Selec-Terrain System", "McIntosh Audio", "Night Vision", "Front Passenger Interactive Display"],
    colors: ["Green", "Black", "Silver", "White"],
    images: [
      "/images/jeep-grand-cherokee-1.jpg",
      "/images/jeep-grand-cherokee-2.jpg",
      "/images/jeep-grand-cherokee-3.jpg"
    ],
    description: "The Jeep Grand Cherokee is a midsize SUV that combines off-road capability with on-road comfort. It features a luxurious interior with plenty of tech features."
  },
  {
    id: 18,
    brand: "Porsche",
    model: "Taycan",
    year: 2023,
    price: 90000,
    fuelType: "Electric",
    transmission: "Automatic",
    seatingCapacity: 4,
    mileage: 225,
    engineCapacity: 0,
    features: ["Performance Battery Plus", "Adaptive Air Suspension", "Porsche Electric Sport Sound", "Head-Up Display", "Four-Zone Climate Control"],
    colors: ["Blue", "White", "Black", "Red"],
    images: [
      "/images/porsche-taycan-1.jpg",
      "/images/porsche-taycan-2.jpg",
      "/images/porsche-taycan-3.jpg"
    ],
    description: "The Porsche Taycan is an all-electric sports car with incredible performance and handling. It delivers the driving experience expected from a Porsche, but with zero emissions."
  },
  {
    id: 19,
    brand: "GMC",
    model: "Yukon",
    year: 2022,
    price: 58000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 8,
    mileage: 20,
    engineCapacity: 5.3,
    features: ["Power-Sliding Center Console", "Air Ride Adaptive Suspension", "15-inch Heads-Up Display", "Rear Seat Media System", "Super Cruise"],
    colors: ["White", "Black", "Red", "Gray"],
    images: [
      "/images/gmc-yukon-1.jpg",
      "/images/gmc-yukon-2.jpg",
      "/images/gmc-yukon-3.jpg"
    ],
    description: "The GMC Yukon is a large SUV that offers seating for up to eight passengers, powerful engines, and a luxurious interior. It's perfect for families who need plenty of space."
  },
  {
    id: 20,
    brand: "Volvo",
    model: "XC60",
    year: 2023,
    price: 47000,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 57,
    engineCapacity: 2.0,
    features: ["Bowers & Wilkins Audio", "Pilot Assist", "360° Camera", "Nappa Leather", "Four-Zone Climate Control"],
    colors: ["Blue", "Silver", "Black", "White"],
    images: [
      "/images/volvo-xc60-1.jpg",
      "/images/volvo-xc60-2.jpg",
      "/images/volvo-xc60-3.jpg"
    ],
    description: "The Volvo XC60 is a luxury compact SUV with a focus on safety, comfort, and Scandinavian design. Its plug-in hybrid version offers excellent fuel economy and performance."
  }
];

export const getAllBrands = (): string[] => {
  const brands = new Set<string>();
  carsData.forEach(car => brands.add(car.brand));
  return Array.from(brands).sort();
};

export const getAllFuelTypes = (): string[] => {
  const fuelTypes = new Set<string>();
  carsData.forEach(car => fuelTypes.add(car.fuelType));
  return Array.from(fuelTypes).sort();
};

export const getSeatingCapacities = (): number[] => {
  const capacities = new Set<number>();
  carsData.forEach(car => capacities.add(car.seatingCapacity));
  return Array.from(capacities).sort((a, b) => a - b);
};

export const getMinMaxPrice = (): { min: number; max: number } => {
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  
  carsData.forEach(car => {
    if (car.price < min) min = car.price;
    if (car.price > max) max = car.price;
  });
  
  return { min, max };
};
