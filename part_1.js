var numbers = [1,2,3,4,5,77,88]

function isEven(number) {
  return number % 2 === 0
}

// I want an array which has only the even numbers
var evens = numbers.filter(isEven)

console.log(evens)

// good use of map (synatx wise)
// need to practice using filter
