
// A utility function to get realistic car images based on brand and model

export const getCarImage = (index: number) => {
  return `/images/placeholder-car.svg`;
};

// Get a specific car image based on car brand and model
export const getCarImageForId = (carId: number, imageIndex: number) => {
  return `/images/placeholder-car.svg`;
};

// Get a realistic car image based on brand and model
export const getRealisticCarImage = (brand: string, model: string): string => {
  // Map of car brands and models to appropriate Unsplash images
  const carImages: Record<string, Record<string, string>> = {
    "Toyota": {
      "Camry": "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800",
      "RAV4": "https://images.unsplash.com/photo-1633695835752-3d9144d56b04?auto=format&fit=crop&w=800",
      "Corolla": "https://images.unsplash.com/photo-1605816988069-b11383b0bf45?auto=format&fit=crop&w=800",
      "default": "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=800"
    },
    "Honda": {
      "Accord": "https://images.unsplash.com/photo-1616422285623-13ff8a45f13b?auto=format&fit=crop&w=800",
      "Civic": "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=800",
      "CR-V": "https://images.unsplash.com/photo-1568844293986-ca4c5a84108f?auto=format&fit=crop&w=800", 
      "default": "https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&w=800"
    },
    "BMW": {
      "3 Series": "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=800",
      "5 Series": "https://images.unsplash.com/photo-1520962922320-2038eebab146?auto=format&fit=crop&w=800",
      "X5": "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800",
      "default": "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800"
    },
    "Tesla": {
      "Model 3": "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?auto=format&fit=crop&w=800",
      "Model S": "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800",
      "Model Y": "https://images.unsplash.com/photo-1617704548623-340376564e68?auto=format&fit=crop&w=800",
      "default": "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800"
    },
    "Ford": {
      "F-150": "https://images.unsplash.com/photo-1609637023137-41710a117e6f?auto=format&fit=crop&w=800",
      "Mustang": "https://images.unsplash.com/photo-1584345604476-8ec5f82d718c?auto=format&fit=crop&w=800",
      "Explorer": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800",
      "default": "https://images.unsplash.com/photo-1551830820-330a71634608?auto=format&fit=crop&w=800"
    },
    "Chevrolet": {
      "Tahoe": "https://images.unsplash.com/photo-1588899451796-9ea4b5a6033e?auto=format&fit=crop&w=800",
      "Suburban": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800",
      "Camaro": "https://images.unsplash.com/photo-1585339666332-950fec230ab1?auto=format&fit=crop&w=800",
      "default": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800"
    },
    "Audi": {
      "Q5": "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=800",
      "A4": "https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=800",
      "R8": "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800",
      "default": "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800"
    },
    "Mercedes-Benz": {
      "E-Class": "https://images.unsplash.com/photo-1617469767053-3f7c08d4c98d?auto=format&fit=crop&w=800",
      "C-Class": "https://images.unsplash.com/photo-1563720223809-b9c9740798a6?auto=format&fit=crop&w=800",
      "S-Class": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800",
      "default": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800"
    },
    "Kia": {
      "Telluride": "https://images.unsplash.com/photo-1600661653561-629509216228?auto=format&fit=crop&w=800",
      "Sorento": "https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?auto=format&fit=crop&w=800",
      "Sportage": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800",
      "default": "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800"
    },
    "Hyundai": {
      "Tucson": "https://images.unsplash.com/photo-1634055824460-7916723bdb3e?auto=format&fit=crop&w=800",
      "Santa Fe": "https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&w=800",
      "Elantra": "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?auto=format&fit=crop&w=800",
      "default": "https://images.unsplash.com/photo-1671429577066-3807db350944?auto=format&fit=crop&w=800"
    },
    "Subaru": {
      "Outback": "https://images.unsplash.com/photo-1656468014942-fcb636ee8443?auto=format&fit=crop&w=800",
      "Forester": "https://images.unsplash.com/photo-1626668893632-6f3a4466d109?auto=format&fit=crop&w=800",
      "Crosstrek": "https://images.unsplash.com/photo-1626668893632-6f3a4466d109?auto=format&fit=crop&w=800",
      "default": "https://images.unsplash.com/photo-1626668893632-6f3a4466d109?auto=format&fit=crop&w=800"
    },
    "Lexus": {
      "RX": "https://images.unsplash.com/photo-1601752943749-7dd8d89f407a?auto=format&fit=crop&w=800",
      "ES": "https://images.unsplash.com/photo-1593055357429-62eaf3b259c3?auto=format&fit=crop&w=800",
      "NX": "https://images.unsplash.com/photo-1662166963263-50e88ce8cf55?auto=format&fit=crop&w=800",
      "default": "https://images.unsplash.com/photo-1623009070533-8e848f3bce40?auto=format&fit=crop&w=800"
    },
    "Nissan": {
      "Rogue": "https://images.unsplash.com/photo-1609520778163-a16fb3262dd2?auto=format&fit=crop&w=800",
      "Altima": "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800",
      "Sentra": "https://images.unsplash.com/photo-1547245324-d777c6f05e80?auto=format&fit=crop&w=800",
      "default": "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800"
    },
    "Volkswagen": {
      "ID.4": "https://images.unsplash.com/photo-1601826131051-9d5c07b914d2?auto=format&fit=crop&w=800",
      "Tiguan": "https://images.unsplash.com/photo-1601826131051-9d5c07b914d2?auto=format&fit=crop&w=800",
      "Jetta": "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800",
      "default": "https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?auto=format&fit=crop&w=800"
    },
    "Mazda": {
      "CX-5": "https://images.unsplash.com/photo-1625232552505-cccf197e9ce1?auto=format&fit=crop&w=800",
      "CX-30": "https://images.unsplash.com/photo-1625232552505-cccf197e9ce1?auto=format&fit=crop&w=800",
      "Mazda3": "https://images.unsplash.com/photo-1586356415756-7e465f761627?auto=format&fit=crop&w=800",
      "default": "https://images.unsplash.com/photo-1586356415756-7e465f761627?auto=format&fit=crop&w=800"
    },
    "Jeep": {
      "Grand Cherokee": "https://images.unsplash.com/photo-1507866491244-1e3f9df06c7e?auto=format&fit=crop&w=800",
      "Wrangler": "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?auto=format&fit=crop&w=800",
      "Compass": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800",
      "default": "https://images.unsplash.com/photo-1568844293986-ca4c5a84108f?auto=format&fit=crop&w=800"
    },
    "Porsche": {
      "Taycan": "https://images.unsplash.com/photo-1614026480209-cd9934144671?auto=format&fit=crop&w=800",
      "911": "https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=800",
      "Cayenne": "https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=800",
      "default": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800"
    },
    "GMC": {
      "Yukon": "https://images.unsplash.com/photo-1633876841479-38506f178239?auto=format&fit=crop&w=800",
      "Sierra": "https://images.unsplash.com/photo-1609637023137-41710a117e6f?auto=format&fit=crop&w=800",
      "Acadia": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800",
      "default": "https://images.unsplash.com/photo-1559038465-e0fa7ff98d01?auto=format&fit=crop&w=800"
    },
    "Volvo": {
      "XC60": "https://images.unsplash.com/photo-1626072778346-0ab6318b9e28?auto=format&fit=crop&w=800",
      "XC90": "https://images.unsplash.com/photo-1619551734325-81aaf323686c?auto=format&fit=crop&w=800",
      "S90": "https://images.unsplash.com/photo-1584345604476-8ec5f82d718c?auto=format&fit=crop&w=800",
      "default": "https://images.unsplash.com/photo-1619551734325-81aaf323686c?auto=format&fit=crop&w=800"
    }
  };

  // A fallback list of generic car images for any brand not specifically mapped
  const fallbackCarImages = [
    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=800"
  ];

  // Check if there's a specific image for this brand and model
  if (carImages[brand] && carImages[brand][model]) {
    return carImages[brand][model];
  }
  
  // If no specific model image, use brand default
  if (carImages[brand] && carImages[brand]["default"]) {
    return carImages[brand]["default"];
  }
  
  // If brand not found, use a random fallback image
  const randomIndex = Math.floor(Math.random() * fallbackCarImages.length);
  return fallbackCarImages[randomIndex];
};

