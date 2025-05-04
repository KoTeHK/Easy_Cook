document.addEventListener('DOMContentLoaded', function(){
// header-menu //
let golovna = document.querySelector('.golovna')
let create_recept = document.querySelector('.create-recept')
let poshuk = document.querySelector('.poshuk')
// body //
let recept_list = document.querySelector('.recept-list')
let recept_card = document.querySelectorAll('.recept-card')
let start_image = document.querySelector('.start-image')
let main_menu = document.querySelector('.main-menu')
let show_recept_page = document.querySelector('.show-recept-page')
let create_recept_page = document.querySelector('.create-recept-page')
// 3 сторінка //
let image = document.querySelector('.show-recept-image')
let time = document.querySelector('.show-recept-time')
let ingredients = document.querySelector('.show-recept-ingredients')
let name = document.querySelector('.show-recept-name')
let description = document.querySelector('.show-recept-description')
let steps = document.querySelector('.show-recept-steps')
// 2 cторінка//
let recept_name_bar = document.querySelector('.searchbar-recept-name')
let recept_info_bar = document.querySelector('.searchbar-recept-info')
let recept_steps_bar = document.querySelectorAll('.step-input')
let recept_ingredients_bar = document.querySelectorAll('.ingredient-field')
let recept_time_bar = document.querySelector('.time-input')
let recept_image_bar = document.querySelector('.image-input')

create_recept.addEventListener('click', function(){

    show_recept_page.style.display = "none"
    main_menu.style.display = "none"
    start_image.style.display = "none"
    create_recept_page.style.display = "flex"
})

golovna.addEventListener('click', function(){
    main_menu.style.display = "flex"
    start_image.style.display = "flex"
    show_recept_page.style.display = "none"
    create_recept_page.style.display = "none"
})

class Description{
    constructor(){
        this.recept()
    }
recept(){
    recept_names = []
    recept_descriptions = []
    recept_images = []
    recept_times = []
    recept_ingredients = []
    recept_steps = []
}

save(){
    recept_names.append(recept_name_bar.value)
    recept_descriptions.append(recept_name_bar.value)
    recept_images.append(recept_name_bar.value)
    recept_times.append(recept_name_bar.value)
    recept_ingredients.append(recept_name_bar.value)
    recept_steps.append(recept_name_bar.value)
}
}


//for (let i = 0; i <= recept_card.length; i += 1){
//
//}
//
//function addIngredient() {
//    const input = document.querySelector('.ingredient-field');
//    const list = document.querySelector('.ingredients-list');
//    
//    if(input.value.trim()) {
//        const div = document.createElement('div');
//        div.className = 'ingredient-item';
//        div.textContent =  `${input.value}`;
//        list.appendChild(div);
//        input.value = '';
//    }
//}
//
//function addStep() {
//    const input = document.querySelector('.step-field');
//    const list = document.querySelector('.steps-list');
//    
//    if(input.value.trim()) {
//        const div = document.createElement('div');
//        div.className = 'step-item';
//        div.innerHTML = 
//        <span class="step-number">${list.children.length + 1}.</span>;
//        <span class="step-text">${input.value}</span>;
//        list.appendChild(div);
//        input.value = '';
//    }
//}

for (let i = 0; i < recept_card.length; i += 1){
    recept_card[i].addEventListener('click', function(){
    
        main_menu.style.display = "none"
        start_image.style.display = "none"
        show_recept_page.style.display = "flex"

    })
}

})
