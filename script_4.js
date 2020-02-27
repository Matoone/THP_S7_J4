const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
 const bornBetween = (yearMin, yearMax) => {
  return entrepreneurs.filter( (entrepreneur) => entrepreneur.year >= yearMin && entrepreneur.year <= yearMax )
 }
 console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70: ")
 bornBetween(1970, 1979).forEach( (entry) => console.log(entry))



 const names = () => {
   return entrepreneurs.map( (entrepreneur) => `${entrepreneur.first} ${entrepreneur.last}`)
 }
 console.log("Sors une array qui contient le prénom et le nom des entrepreneurs:")
 console.log(names())



 const ageToday = () => {
  return entrepreneurs.map( (entrepreneur) => `${entrepreneur.first} ${entrepreneur.last} would be ` + (2020 - entrepreneur.year).toString() + " years old in 2020" )
 }
console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
ageToday().forEach( (entry) => console.log(entry))


 const compareNames = (previous, current) => {
  if ( previous.last < current.last ) {
    return -1
  }
  else if ( previous.last > current.last ){
    return 1
  }
  return 0
 }
 const sortAlphabetically = () => {
  return entrepreneurs.sort(compareNames)
 }
 console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.")
 console.log(sortAlphabetically())