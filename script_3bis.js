const pyramid = (size) => {
  return [...Array(size)].map((val, index) => [
    [...Array(size - index +1)].map(() => ' ').join(''),
    [...Array(index + 1)].map(() => '#').join('')
  ].join('')).forEach((line) => console.log(line))
}
pyramid(parseInt(prompt("Salut, bienvenue dans ma pyramide ! Combien d'étages veux-tu ?")))