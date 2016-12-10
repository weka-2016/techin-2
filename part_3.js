//part 1
var complexObj = {
  people: [{
    name: 'piet',
    accounts: [
      {name: 'savings', balance: 1.50},
      {name: 'cheque', balance: 12.00}
    ]
  }, {
    name: 'mix',
    accounts: [
      {name: 'savings', balance: 1.50},
      {name: 'cheque', balance: 12.00}
    ]
  }, {
    name: 'joseph',
    accounts: [
      {name: 'savings', balance: 1.50},
      {name: 'cheque', balance: 12.00}
    ]
  }]
}


// I want a command which will fetch out piets cheque balance
var pietsChequeBalance = complexObj.people[0].accounts[1].balance
console.log(pietsChequeBalance)
