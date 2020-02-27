const factorial = (number) => {
  if (number < 0) {
    return "La fonction factorielle ne peut pas être appliquée à un nombre négatif"
  }
  let result = 1
  let current = number
  while ( current > 0 ) {
    result *= current
    current --
  }
  return result
}
const number = prompt("De quel nombre veux tu calculer la factorielle ?")
console.log( `Le résultat est: ${ factorial(number) }` )