var numbers = [1,2,3,4,5,77,88]

function isEven(number) {
  return number % 2 === 0
}

// I want an array which has only the even numbers
var evens = numbers.filter(isEven(numbers){
  return
})


console.log(evens)

// got to here in 5 mins
// mix

var evens = numbers.filter(function (number){
  return number % 2 === 0
})

var evens = numbers.filter(isEven)

//notes :
- careful of plurals
- practice map + filter
