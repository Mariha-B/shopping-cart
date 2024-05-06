# Shopping Cart

## Description

This project implements a simple checkout system for a shopping cart. It allows users to calculate the total price of an order based on the unit prices of items and any special offers that are currently applicable.

## Installation

1. Make sure you have Node.js installed. This project requires Node.js version 10 or higher. You can download it from [nodejs.org](https://nodejs.org/).

1. Clone the repository:
   ```bash
   git clone https://github.com/Mariha-B/shopping-cart.git

2. Navigate to the file in the terminal
    ```bash
    cd shopping-cart

3. Install the dependencies
    ```bash
    npm i

## Usage

To use the shopping cart, you will need to require in the function to a .js file and enter data of [this](https://spareroom.github.io/recruitment/docs/cart-kata/data-set-1.json) type as the argument.

```javascript
    const { shoppingCart } = require("./shopping-cart");

    const order = [
    { code: "A", quantity: 2 },
    { code: "B", quantity: 1 },
    { code: "C", quantity: 1 },
    { code: "D", quantity: 2 }
    ];

    const totalPrice = shoppingCart(order);
    console.log("Total Price:", totalPrice);
```