saleAmounts = [123.50, 100.00, 2.00]

function addTax(amount) {
  return amount * 1.15
}

// I want a new array which has taxes added
var afterTaxAmounts = saleAmounts.map(addTax)
