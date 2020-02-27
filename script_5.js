const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

haveAllBooksBeenRented = (bookArray) => {
  if (bookArray.every( (book) => book.rented > 0 )) {
    console.log("---> Tous les livres ont déjà été empruntés au moins une fois")
  }
  else {
    console.log("---> Ces livres n'ont pas tous étés empruntés")
  }
}
compareRenting = (previous, current) => {
  if ( previous.rented < current.rented ) {
    return -1
  }
  else if ( previous.rented > current.rented ) {
    return 1
  }
  else {
    return 0
  }
}
sortByRenting = ( bookArray ) => {
  return bookArray.sort( compareRenting )
}

compareAlphabetically = (previous, current) => {
  if ( previous.title < current.title ) {
    return -1
  }
  else if ( previous.title > current.title ) {
    return 1
  }
  else {
    return 0
  }
}

sortAlphabetically = ( bookArray ) => {
  return bookArray.sort( compareAlphabetically )
}
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")

haveAllBooksBeenRented(books)

console.log("Quel est livre le plus emprunté ?")
console.log("----> " + sortByRenting(books)[books.length - 1].title)

console.log("Quel est livre le moins emprunté ?")
console.log("----> " + sortByRenting(books)[0].title)

console.log("Trouve le livre avec l'ID: 873495")
console.log ("----> " + books.find( (book) => book.id === 873495 ).title )

console.log("Supprime le livre avec l'ID: 133712")
if (books.splice(books.findIndex( (book) => book.id === 133712), 1)) {
  console.log("----> Le livre a bien été supprimé.")
}
else {
  console.log("----> Référence introuvable: impossible de supprimer.")
}

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).")
console.log( sortAlphabetically(books) )
