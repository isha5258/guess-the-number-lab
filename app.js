

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
    let msg = null
    if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum){
    msg = `Congrat! You guessed the number in ${this.prevGuesses.length} tries!`
  } else if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum){
    
    msg = `Your guess is too high. Previous guesses: ${this.prevGuesses.join(', ')}`
  } else {
    msg = `Your guess is too low. Previous guesses: ${this.prevGuesses.join(', ')}`
  }
  alert(msg)
}
}
game.play()

