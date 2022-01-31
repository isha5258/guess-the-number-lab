

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      do {
        this.prevGuesses.push(this.getGuess());
        this.render();
      }while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);
      
    },
  
  getGuess: function(){
    let guess = null
    
    do {
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))

    } while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum)
    return guess
    },

  render: function(){
    console.log(this.prevGuesses)
    if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum){
    console.log(`Congrat! You guessed the number in ${this.prevGuesses[this.prevGuesses.length - 1]} tries!`)
  } else if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum){
    
    console.log(`Your guess is too high. Previous guesses: ${this.prevGuesses.join(', ')}`)
  } else {
    console.log(`Your guess is too low. Previous guesses: ${this.prevGuesses.join(', ')}`)
  }
}
}
game.play()

