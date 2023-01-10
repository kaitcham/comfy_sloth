export default (number) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format((number / 100).toFixed(2));

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === 'colors') {
    unique = unique.flat();
  }
  return ['all', ...new Set(unique)];
};
