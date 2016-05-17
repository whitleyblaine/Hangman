var word1 = "chance";
var word2 = "kendrick";
var word3 = "tupac";
var word4 = "aesop";
var counter = 0;
var wins = 0;
var userGuesses = [];



document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  document.getElementById('currentWord').innerHTML = '_ '.repeat(word1.length);


  if (userGuess != '[' && userGuess != ']' && userGuess !='' && counter < (word1.length + 5)) {
    document.getElementById('lettersGuessed').innerHTML += userGuess + ", ";
    counter += 1;
    document.getElementById('guessesRemaining').innerHTML = (word1.length - counter) + 5;
    userGuesses += userGuess;
  };

  for (var i=0; i <= word.length; i++) {
    if (userGuess == word1.charAt(i)) {
      wins++;
      document.getElementById('wins').innerHTML = wins;
      document.getElementById('currentWord').innerHTML.charAt(i) = userGuess;
    }
  };
};