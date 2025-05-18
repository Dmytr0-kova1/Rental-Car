export const getCityAndCountry = (address) => {
  const parts = address.split(",");
  const city = parts[1].trim();
  const country = parts[2].trim();
  return { city, country };
};
