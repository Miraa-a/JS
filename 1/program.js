'use strict';
document.getElementById('button').addEventListener('click', changeText);

function changeText() {
    var message = document.getElementById('message').value;
    var ignore = ["?", "!", ":", ";", ",", ".", " ", "\t", "\r"];
    var letters = {}, result;
    var words = message.split(' ');

    words.forEach(function (word) {
        word.split('').forEach(function (letter, i) {
            if (!letters[letter] && ignore.indexOf(letter) == -1 && -1 != word.indexOf(letter, i + 1)) {
                letters[letter] = 1;
            }
        });
    });

    result = message.split('').filter(function (v) {
        return !letters[v];
    }).join('');
  
  document.getElementById("correct").innerHTML = result;
    
}
