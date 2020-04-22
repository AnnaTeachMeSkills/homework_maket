let container = document.querySelectorAll('.container');
const defSettings = {
    margin: 10,
} 

container.forEach(item => item.fancybox = function (fancySetting = {}) {
    createNoneBlock();
    let margin = fancySetting.margin||defaultSettings.margin ;
    let image_block = item.querySelectorAll('.photo');
    let eachPhoto = item.querySelectorAll('.eachPhoto');
    let btn_close = item.querySelector('.close');
    let next = item.querySelector('.next');
    let prev = item.querySelector('.prev');
    let fun_block = item.querySelector('.fun');
    let modal_block = item.querySelector('.modal');


    function createNoneBlock () {
        let modal_block = document.createElement('div');
        modal_block.classList.add('modal');
        modal_block.innerHTML = `
            <div class="modal_header">
            <div class = prev_div><span class="prev"><</span></div>
            <div class="picture fun"></div>
            <div class = next_div><span class="next">></span></div>
            <div class = close_div><span class="close">X</span><div>
            </div>`
        item.append(modal_block);
    }

    
    image_block.forEach(item => {
        item.style.margin = `${margin}px`;
        item.addEventListener('click', (e) => {
            e.preventDefault();
            modal_block.style.display = 'block';
        });
    });


    i=1;
    eachPhoto.forEach(item =>{
        item.dataset.number = i++;
        item.classList.add ('eachPhoto');
        item.addEventListener('click', () => {
            
            let image = document.createElement('img');
            fun_block.append(image);
            item.getAttribute('data-number');
            let atribut = item.getAttribute('data-number');
            image.dataset.number = atribut;
            image.src = item.src;
            next.addEventListener('click', () => {
                if (atribut < eachPhoto.length) {atribut = String(Number(atribut) + 1);
                    image.dataset.number = atribut;
                    image.src = eachPhoto[atribut-1].src;
                }
            })
            prev.addEventListener('click', () => {
                if (atribut > 1) {
                    atribut = String(Number(atribut) - 1);
                    image.dataset.number = atribut;
                    image.src = eachPhoto[atribut-1].src;
                }
            })
        })
    })

    btn_close.addEventListener('click', () => {
        modal_block.style.display = 'none';
        fun_block.innerHTML = '';

    });
})

