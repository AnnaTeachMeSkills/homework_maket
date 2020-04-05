const userParametr = ['name', 'height', 'skin_color']
let button = document.querySelector("button");
let modal_wrapper = document.querySelector('.modal_wrapper');
let left_col = document.querySelector('.modal_wrapper .left_col');
let right_col = document.querySelector('.modal_wrapper .right_col');

modal_wrapper.addEventListener('click', e => {
    let modal = document.querySelector('.modal');
    if (e.target !== modal) {
        left_col.innerHTML = "";
        right_col.innerHTML = "";
        modal_wrapper.classList.remove('active');
    };
});

button.addEventListener('click', async function(){
    buildTable();
    let users = await getPeople();
    fillTable(users);
                     
});

let getAdditionalUserTable = (mass, eye_color,birth_year, ) => {
    let table = document.createElement('table');
    table.innerHTML = `
    </tr>
        <th>Информация o персонаже </th>
    </tr>
    <tr>
        <td>Масса</td>
        <td>Цвет глаз</td>
        <td>Год рождения</td>
    </tr>
    <tr>
        <td>${mass}</td>
        <td>${eye_color}</td>
        <td>${birth_year}</td>
    </tr>`;
    return table;
}

let planetData = function (planetInfoTable) {
    let namePl = planetInfoTable.name;
    let diameterPl = planetInfoTable.diameter;
    let rotationPl = planetInfoTable.rotation_period;
    let populationPl = planetInfoTable.population;
    let table = document.createElement('table');
    table.innerHTML = `
    </tr>
        <th>Информация o планете </th> 
        
    </tr>
    <tr>
        <td>Название</td>
        <td>Диаметр</td>
        <td>Период вращения</td>
        <td>Население</td>
    </tr>
    <tr>
        <td>${namePl}</td>
        <td>${diameterPl}</td>
        <td>${rotationPl}</td>
        <td>${populationPl}</td>`;
    
    return table;
    
}

async function showModal(e) {
    let thisTr = e.target.closest('tr');
    if (thisTr.rowIndex === 0) return;
    let planetUrl = thisTr.dataset.planetUrl;
    let mass =  thisTr.dataset.mass;
    let eye_color =  thisTr.dataset.eye_color;
    let birth_year =  thisTr.dataset.birth_year;
    let additionalUserInfo = getAdditionalUserTable(mass, eye_color,birth_year);
    let planetInfoTable = await getPlanet(planetUrl);
    left_col.append(additionalUserInfo);
    right_col.append(planetData(planetInfoTable));
    modal_wrapper.classList.add('active');
}


async function getPeople() {
    let usersResonse = await fetch('https://swapi.co/api/people');
    let users = (await usersResonse.json()).results;
    console.log(users);
    return users;
}

async function getPlanet(planetUrl) {
    let usersResonse = await fetch(planetUrl);
    let planet = (await usersResonse.json());
    return planet;
}



function buildTable () {
    body = document.body;
    let table = document.createElement('table');
    table.addEventListener('click', showModal)
    let tr = document.createElement('tr');
    userParametr.forEach((item) => {
        let td = document.createElement('td');
        td.innerHTML = item;
        tr.append(td);
    });
    table.classList.add('peopleTable');
    table.append(tr);
    body.prepend(table);
}

function fillTable (users) {
    users.forEach(item => {
        let tr = document.createElement('tr');
        tr.dataset.mass= item.mass;
        tr.dataset.eye_color= item.eye_color;
        tr.dataset.birth_year = item.birth_year;
        tr.dataset.planetUrl = item.homeworld;
        userParametr.forEach((el) => {
            let td = document.createElement('td');
            let text = item[el];
            td.innerHTML = text;
            tr.append(td);            
        });
        let table = document.querySelector('.peopleTable'); 
        table.append(tr);
    });

}
