//задание 1

let table = document.body.children[0];
console.log(table);

let tr = table.rows;
console.log(tr);

for ( i =0; i <tr.length; i++ ) {
    console.log(tr[i])
    bg = tr[i].cells[2];
    bg.style.background = 'red';
    console.log(bg)
   
}



//задание 2 


let data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
 ];
 

    let tabletwo = document.querySelector('.datatable')
    console.log(tabletwo);

    let trtwo = tabletwo.rows;
    console.log(trtwo);



    inone_0 = trtwo[0].cells[0];
    inone_0.innerHTML = 'firstName';
    intwo_0 = trtwo[0].cells[1];
    intwo_0.innerHTML = 'lastName';
    inthree_0 = trtwo[0].cells[2];
    inthree_0.innerHTML = 'age';
    inone = trtwo[1].cells[0];
    inone.innerHTML = data[0].firstName;
    intwo = trtwo[2].cells[0];
    intwo.innerHTML = data[1].firstName;
    inthree = trtwo[3].cells[0];
    inthree.innerHTML = data[2].firstName;
    inone_2 = trtwo[1].cells[1];
    inone_2.innerHTML = data[0].lastName;
    intwo_2 = trtwo[2].cells[1];
    intwo_2.innerHTML = data[1].lastName;
    inthree_2 = trtwo[3].cells[1];
    inthree_2.innerHTML = data[2].lastName;
    inone_3 = trtwo[1].cells[2];
    inone_3.innerHTML = data[0].age;
    intwo_3 = trtwo[2].cells[2];
    intwo_3.innerHTML = data[1].age;
    inthree_3 = trtwo[3].cells[2];
    inthree_3.innerHTML = data[2].age;
    
    


