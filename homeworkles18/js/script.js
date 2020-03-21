const data = [
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
    }, {
        firstName: 'Svetlana',
        lastName: 'Pypkina',
        age: 73
    }
];

let body = document.body;
let table;
const newData = [];
let addBtn = document.querySelector('.add');
let delBtn = document.querySelector('.del');
let corBtn = document.querySelector('.correct');
for (let i = 0; i < data.length; i++) {
    newData.push(Object.values(data[i]));
}
const removeTable = () => {
    table.remove();
}

const fillTable = (newData) => {
    
    for (let i = 0; i < newData.length; i++) {
        let tr = document.createElement('tr');
        table.append(tr);
    
        for (let j = 0; j < newData[i].length; j++) {
            let td = document.createElement('td');
            td.innerHTML = newData[i][j];
            tr.append(td);
        }
    }
}

const createTable = () => {
    table = document.createElement('table');
    body.prepend(table);
    let headerTr = document.createElement('tr');
    for (key in data[0]) {
        let td = document.createElement('td');
        td.innerHTML = key;
        headerTr.append(td);
    }

    table.append(headerTr);
    
}




createTable();
fillTable(newData);



addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let oneUserArr = [];

    let userName= prompt('vvedite user name');
    oneUserArr.push(userName);

    let secondName= prompt('vvedite second Name');
    oneUserArr.push(secondName);

    let userAge= +prompt('vvedite user age');
    oneUserArr.push(userAge);

    newData.push(oneUserArr);
    removeTable();
    createTable();
    fillTable(newData);


});


delBtn.addEventListener('click', (e) => {
    e.preventDefault();
     let nameUser = prompt('Vvedite user name');
    for (i= 0; i < newData.length; i++) {
        if (nameUser === newData[i][0]) {
        newData.splice([i],1)

        }
    }
   removeTable();
   createTable();
    fillTable(newData);
});

corBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let nameUser = prompt('Vvedite user name');
    for (i= 0; i < newData.length; i++) {
        if (nameUser === newData[i][0]) {
            let NewUserArr = [];

            let userNameNew= prompt('vvedite new user name');
            NewUserArr.push(userNameNew);

            let secondNameNew = prompt('vvedite new second Name');
            NewUserArr.push(secondNameNew);

            let userAgeNew= +prompt('vvedite new user age');
            NewUserArr.push(userAgeNew);

            newData.splice([i],1,NewUserArr)

            removeTable();
            createTable();
             fillTable(newData);

        }
    }


})