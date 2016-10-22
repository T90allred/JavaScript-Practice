const SPENDING_LIMIT = 200;
const TAX_RATE = 0.08;
const PHONE_COST = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var total = 0;

function calculateTax(total) {
    return total * TAX_RATE;
}

function formatAmount(total) {
    return "$" + total.toFixed( 2 );
}

// keep buying phones while you still have money
while (total < bank_balance) {
    // buy a new phone!
    total = total + PHONE_COST;

    // can we afford the accessory?
    if (total < SPENDING_LIMIT) {
        total = total + ACCESSORY_PRICE;
    }
}

// don't forget to pay the government, too
total = total + calculateTax( total );

console.log(
    "Your purchase: " + formatAmount( total )
);
// Your purchase: $334.76

// can you actually afford this purchase?
if (total > bank_balance) {
    console.log(
        "You can't afford this purchase. :("
    );
}
// You can't afford this purchase. :(
