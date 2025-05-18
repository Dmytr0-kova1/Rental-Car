export const formatMileage = (value) => {
  return Number(value).toLocaleString("en-US").replace(/,/g, " ");
};
