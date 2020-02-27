const getAnswer = (question) => [
  !question && 'Quoi t\'es en PLS?',
  question.includes('fortnite') && 'On s\' fait une partie soum-soum ?',
  question.endsWith('?') && 'Ouais ouais...',
  question.toUpperCase() === question && 'Pwa, calme toi !'
]
while(true) {
  const question = prompt('Quelle question veux-tu poser à ce boutonneux prépubère ?')
  if (question === 'exit') break
  console.log(getAnswer(question).find(Boolean) || 'balek')
}