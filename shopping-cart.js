exports.shoppingCart = (order) => {
  const prices = { A: 50, B: 35, C: 25, D: 12 };
  const offers = {
    A: { quantity: 3, price: 140 },
    B: { quantity: 2, price: 60 },
  };
  let total = 0;

  order.forEach((item) => {
    const { code, quantity } = item;

    if (offers[code] && quantity >= offers[code].quantity) {
      const offerQuantity = Math.floor(quantity / offers[code].quantity);
      const remainder = quantity % offers[code].quantity;
      total += offers[code].price * offerQuantity + prices[code] * remainder;
    } else {
      total += prices[code] * quantity;
    }
  });
  return total;
};
