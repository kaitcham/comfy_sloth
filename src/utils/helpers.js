export default (number) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format((number / 100).toFixed(2));
