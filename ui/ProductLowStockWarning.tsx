export const ProductLowStockWarning = ({ stock }: { stock: number }) => {
  if (stock > 3) {
    return null;
  }

  if (stock === 0) {
    return <div className="text-sm text-muoto-orange">Out of stock</div>;
  }

  return (
    <div className="text-sm text-muoto-orange">Only {stock} left in stock</div>
  );
};
