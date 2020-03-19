
let body = document.body;

let table = document.createElement('table');

body.append(table);

table.classList.add('tablestyle');


let trNumber = 5;

for (i =0; i<trNumber; i++){
    let tr = document.createElement('tr');
    table.append(tr);
    for (j = 0; j<trNumber; j++){
    let td = document.createElement('td');
    tr.append(td);
    td.innerHTML = '1';

    }

}

let tr = table.rows;

for ( i =0; i <tr.length; i++ ) {
    let act = tr[i].cells[i];
    act.classList.add('active');
       
}

