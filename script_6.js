decodeCodon = (codon) => {
  if (codon.length !== 3) {
    console.log("Erreur, un codon doit faire 3 caracères de long.")
    return null
  }
  switch (codon) {
    case "UCU":
    case "UCC": 
    case "UCA":  
    case "UCG":  
    case "AGU":
    case "AGC":     
      return "Sérine"
      break;
    case "CCU":
    case "CCC":
    case "CCA":
    case "CCG":
      return "Proline"
      break;
    case "UUA":
    case "UUG":
      return "Leucine"
      break;
    case "UUU":
    case "UUC":
      return "Phénylalanine"
      break;
    case "CGU":
    case "CGC":
    case "CGA":
    case "CGG":
    case "AGA":
    case "AGG":
      return "Arginine"
      break;
    case "UAU":
    case "UAC":
      return "Tyrosine"
      break;
                         
    default:
      console.log("Codon inconnu, veuillez vérifier votre entrée.")
      return null
      break;
  }
}

decodeARN = (ARN) => {
  const codonsArray = ARN.match(/.{1,3}/g)
  console.log(codonsArray)
  return codonsArray.map( codon => decodeCodon(codon) ).join("-")
}

console.log( decodeARN("CCGUCGUUGCGCUACAGC") )
