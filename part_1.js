var numbers = [1,2,3,4,5,77,88]

function isEven(number) {
  return number % 2 === 0
}

// I want an array which has only the even numbers
var evens = numbers.map(isEven(num){})


// talked through and understood that map isn't a fit

var evens = numbers.filter(isEven(num){
  return num
})

////

mix writes :

var evens = numbers.filter( function (num){
  return num % 2 === 0
})

var evens = numbers.filter(isEven)
