import rentals from "../data/rentals.json";

export const rentalLoader = ({ params }) => ({
  id: params.id,
  rental: rentals.find((item) => item.id === params.id),
});

export const rentalsLoader = () => ({
  sorted: "default",
  filtered: false,
  rentals: [...rentals],
});
