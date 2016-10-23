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

while (total < bank_balance) {
    total = total + PHONE_COST;

    if (total < SPENDING_LIMIT) {
        total = total + ACCESSORY_PRICE;
    }
}

total = total + calculateTax( total );

console.log(
    "Your purchase: " + formatAmount( total )
);

if (total > bank_balance) {
    console.log(
        "You can't afford this purchase. :("
    );
}
