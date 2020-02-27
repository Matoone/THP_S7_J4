const askBot = (question) => {
  return !question ? "Quoi t'es en PLS ?"
    : question.endsWith("?") ? "Ouais ouais ..."
    : question.toUpperCase() === question ? "Pwa, calme toi !"
    : question.match(/fortnite/i) ? "On s' fait une partie soum-soum ?"
    : "balek..."
}
let question = prompt("Quelle question veux-tu poser à ce boutonneux prépubère ? (tapez exit pour sortir de cette chambre d'ado dégueulasse)")
while (question !== "exit") {
  console.log(askBot(question))
  question = prompt("Quelle question veux-tu poser à ce boutonneux prépubère ? (tapez exit pour sortir de cette chambre d'ado dégueulasse)")
}
console.log("Ouais tchô !")