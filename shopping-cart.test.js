const { shoppingCart } = require("./shopping-cart");

describe("Shopping Cart Test Suite", () => {
  test("Returns a number", () => {
    const result = shoppingCart([{}]);
    expect(typeof result).toBe("number");
  });
  test("Returns a total using standard pricing", () => {
    const result = shoppingCart([
      { code: "A", quantity: 2 },
      { code: "B", quantity: 1 },
      { code: "C", quantity: 1 },
      { code: "D", quantity: 2 },
    ]);
    expect(result).toBe(184);
  });
  test("Returns a total when object has 1 item", () => {
    const result = shoppingCart([{ code: "A", quantity: 1 }]);
    expect(result).toBe(50);
  });
  test("Returns correct total incl special offers", () => {
    const result = shoppingCart([
      { code: "A", quantity: 3 },
      { code: "B", quantity: 2 },
      { code: "C", quantity: 1 },
      { code: "D", quantity: 2 },
    ]);
    expect(result).toBe(249);
  });

  test("Returns correct total incl special offers when there's a multiple of offer quantity", () => {
    const result = shoppingCart([
      { code: "A", quantity: 6 },
      { code: "B", quantity: 2 },
      { code: "C", quantity: 1 },
      { code: "D", quantity: 2 },
    ]);

    expect(result).toBe(389);
  });
  test("Returns correct total incl special offers when there's a multiple of offer quantity, with some quantity left over that doesn't meet the requirements", () => {
    const result = shoppingCart([
      { code: "A", quantity: 7 },
      { code: "B", quantity: 2 },
      { code: "C", quantity: 1 },
      { code: "D", quantity: 2 },
    ]);

    expect(result).toBe(439);
  });

  test("Input does not mutate", () => {
    const input = [
      { code: "A", quantity: 7 },
      { code: "B", quantity: 2 },
      { code: "C", quantity: 1 },
      { code: "D", quantity: 2 },
    ];
    shoppingCart(input);
    expect(input).toEqual([
      { code: "A", quantity: 7 },
      { code: "B", quantity: 2 },
      { code: "C", quantity: 1 },
      { code: "D", quantity: 2 },
    ]);
  });

});
