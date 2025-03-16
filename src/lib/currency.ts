// Exchange rate (as of March 2024)
const GHS_EXCHANGE_RATE = 13.15; // 1 USD = 13.15 GHS

export const convertToGHS = (usdPrice: number): number => {
  return usdPrice * GHS_EXCHANGE_RATE;
};

export const formatGHSPrice = (price: number): string => {
  return `GH₵ ${price.toFixed(2)}`;
};

export const formatUSDPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};