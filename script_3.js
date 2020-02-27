const pyramid = (number) => {
  const pyramidArray = []
  for(let i = 1; i <= number; i++) {
    let floor = ""
    let current = 1
    while ( current <= number - i ) {
      floor = floor + " "
      current ++
    }
    while ( current <= number ) {
      floor = floor + "#"
      current ++
    }
    pyramidArray.push(floor)
  }
  pyramidArray.forEach( (floor) => { console.log(floor) } )
}

const number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
pyramid(number)