
// A utility function to get a placeholder image for cars
// In a real app, this would be replaced with actual car images

export const getCarImage = (index: number) => {
  return `/images/placeholder-car.svg`;
};

// Since we can't upload real images in this mock environment,
// this function will simply return the placeholder SVG
export const getCarImageForId = (carId: number, imageIndex: number) => {
  return `/images/placeholder-car.svg`;
};
