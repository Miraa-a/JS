'use strict';

document.getElementById('button').addEventListener('click', count);
function count() {
    var inputmes = document.getElementById('input').value;
    var result, i;
    inputmes = inputmes.split(/([-,+,/,*])/);
    for (i = 0; i <= inputmes.length - 1; i++) {
        if (inputmes[i] === '+') {
            inputmes[i + 1] = parseFloat(inputmes[i - 1]) + parseFloat(inputmes[i + 1]);
            result = inputmes[i + 1];
        }
        if (inputmes[i] === '-') {
            inputmes[i + 1] = parseFloat(inputmes[i - 1]) - parseFloat(inputmes[i + 1]);
            result = inputmes[i + 1];
        }
        if (inputmes[i] === '/') {
            inputmes[i + 1] = parseFloat(inputmes[i - 1]) / parseFloat(inputmes[i + 1]);
            result = inputmes[i + 1];
        }
        if (inputmes[i] === '*') {
            inputmes[i + 1] = parseFloat(inputmes[i - 1]) * parseFloat(inputmes[i + 1]);
            result = inputmes[i + 1];
        }
    }
    document.getElementById("output").innerHTML = result;
}
