const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(price / 8116);
};

export default FormatPrice;
