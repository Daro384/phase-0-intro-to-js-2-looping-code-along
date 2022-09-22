// Code your solutions in this file
const countDown = number => {
    while (number >= 0) console.log(number--)
}

const writeCards = (array,occasion) => {
    const thankYouString = []
    for (let name of array) {
        thankYouString.push(`Thank you, ${name}, for the wonderful ${occasion} gift!`)
    }
    return thankYouString
}