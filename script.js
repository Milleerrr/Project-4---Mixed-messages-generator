function randomPhrase(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }

const collectiveRandom = {
    names: ['Danisha Laquisha', 'Ben Dover', 'Mike Hunt', 'Lerory Jenkins'],
    nonsense: ['Dogs are Gods', 'people fart', 'Blue is not red', 'the sun is Big', 'No one cares'],
  }

  
  // Store the 'phrases' in an array
  let randomNonsense = []
  
  // Iterate over the object
  for(let prop in collectiveRandom) {
    let optionIdx = randomPhrase(collectiveRandom[prop].length)
  
    // use the object's properties to customize the message being added to randomNonsense 
    switch(prop) {
      case 'names':
        randomNonsense.push(`Hello my name is "${collectiveRandom[prop][optionIdx]}".`)
        break
      case 'nonsense':
        randomNonsense.push(`Did you know that "${collectiveRandom[prop][optionIdx]}".`)
        break
      default:
        randomNonsense.push('You have reached the end of the line.')
    }
  }

function formatPhrase(phrase) {
// Add some ASCII here?
// Add in more symbols to the array? like emojies or what not?
    const formatted = randomNonsense.join('\n')
    console.log(formatted)
}
  
formatPhrase(randomNonsense);