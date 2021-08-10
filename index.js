function makeGrid() {
    let tbl = document.getElementById('container')

    for (let i = 0; i < 17; i++) {
        let tableRow = document.createElement('tr');
        tableRow.id = 'row' + 1;
        tbl.appendChild(tableRow);
    for (let j = 0; i < 17; i++) {
        let yourRow = document.createElement('td');
        yourRow.id = 'row' + 1;
        tbl.appendChild(yourRow);
    }
   
   
    }
}