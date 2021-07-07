function makeGrid() {
    let tbl = document.getElementById('tbl')

    for (let i = 0; i < 17; i++) {
        let myRow = document.createElement('tr');
        myRow.id = 'row' + 1;
        tbl.appendChild(myRow);
        
        let rowW = document.getElementById('row' + i);
    for (let j = 0; j < 17; j++) {
            let myCell = document.createElement('td');
            rowW.appendChild(myCell);
        }
    }



}