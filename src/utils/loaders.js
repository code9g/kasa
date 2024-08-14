import rentals from "../data/rentals.json";

const RANDOM_DELAY = 1000;

const fakeNetwork = async (delay = null) =>
  new Promise((res) => setTimeout(res, delay ?? Math.random() * RANDOM_DELAY));

export const rentalLoader = async ({ params }) => {
  await fakeNetwork();
  return {
    id: params.id,
    rental: rentals.find((item) => item.id === params.id),
  };
};

export const rentalsLoader = async () => {
  await fakeNetwork();
  return {
    sorted: "default",
    filtered: false,
    rentals: [...rentals],
  };
};
