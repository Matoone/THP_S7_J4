const askBot = (question) => {
  if (!question) {
    console.log("Quoi t'es en PLS ?")
  }
  else if (question.endsWith("?")) {
    console.log("Ouais ouais ...")
  }
  else if (question.toUpperCase() === question) {
    console.log("Pwa, calme toi !")
  }
  else if ((question.match(/fortnite/i))) {
    console.log("On s' fait une partie soum-soum ?" )
  }
  else {
    console.log("balek...")
  }
}
let question = prompt("Quelle question veux-tu poser à ce boutonneux prépubère ? (tapez exit pour sortir de cette chambre d'ado dégueulasse)")
while (question !== "exit") {
  console.log(askBot(question))
  question = prompt("Quelle question veux-tu poser à ce boutonneux prépubère ? (tapez exit pour sortir de cette chambre d'ado dégueulasse)")
}
console.log("Ouais tchô !")
