//sets the constant and variables 

const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');

//creates a default grid of 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

