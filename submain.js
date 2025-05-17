document.addEventListener('DOMContentLoaded', function(){
const spisok = [
    {
        "photo":"img-show1.jpg",
        "name":"Борщ",
        "description":"desc1",
        "category":"cat1",
        "history":"",
        "ingredients":"",
        "time":"",
        "steps":""

    },
    {
        "photo":"img-show1.jpg",
        "name":"Борщ",
        "description":"2",
        "category":"2",
        "history":"",
        "ingredients":"",
        "time":"",
        "steps":"" 
    },
    {
        "photo":"img-show1.jpg",
        "name":"Борщ",
        "description":"бамбини гузини",
        "category":"cat1",
        "history":"",
        "ingredients":"чсмчсмчсмчсмчсм",
        "time":"",
        "steps":""

    },
    {
        "photo":"img-show1.jpg",
        "name":"Тралалело тралала",
        "description":"Крокодило бомболдило",
        "category":"cat1",
        "history":"",
        "ingredients":"фывфывфыв",
        "time":"",
        "steps":""

    },
    {
        "photo":"img-show1.jpg",
        "name":"Борщ",
        "description":"бамбини гузини",
        "category":"cat1",
        "history":"",
        "ingredients":"чсмчсмчсмчсмчсм",
        "time":"",
        "steps":""

    },
    {
        "photo":"img-show1.jpg",
        "name":"Борщ",
        "description":"бамбини гузини",
        "category":"cat1",
        "history":"",
        "ingredients":"чсмчсмчсмчсмчсм",
        "time":"",
        "steps":""

    }
]  






// header-menu //
let golovna = document.querySelector('.golovna')
let change_theme = document.querySelector('.change-theme')
// body //
let recept_list = document.querySelector('.recept-list')
let recept_card = document.querySelectorAll('.recept-card')
let start_image = document.querySelector('.start-image')
let main_menu = document.querySelector('.main-menu')
let show_recept_page = document.querySelector('.show-recept-page')
let create_recept_page = document.querySelector('.create-recept-page')
let view_name = document.querySelectorAll('.recept-name-view')
let view_category = document.querySelectorAll('.recept-category-view')
let view_description = document.querySelectorAll('.recept-description-view')
let view_photo = document.querySelectorAll('.recept-photo-view')
// 3 сторінка //
let image1 = document.querySelector('.show-recept-image0')
let image2 = document.querySelector('.show-recept-image1')
let image3 = document.querySelector('.show-recept-image2')
let image4 = document.querySelector('.show-recept-image3')
let show_recept_page1 = document.querySelector('.show-left-column')
let show_recept_page2 = document.querySelector('.show-right-column')
let time = document.querySelector('.show-recept-time')
let ingredients = document.querySelector('.show-recept-ingredients')
let name = document.querySelector('.show-recept-name')
let description = document.querySelector('.show-recept-description')
let steps = document.querySelector('.show-recept-steps')





for (let i = 0; i < spisok.length; i += 1) {
    var recept_list_paste = document.getElementById('recept_list');
    var newElement = document.createElement('div');
    newElement.classList.add('recept-card');
    newElement.id = `${i}`;

    var ElementFullInfo = document.createElement('div');
    ElementFullInfo.classList.add('recept-full-view');

    var ElementCategory = document.createElement('div');
    ElementCategory.classList.add('recept-category-view');
    ElementCategory.textContent = `${spisok[i].category}`;

    var ElementPhoto = document.createElement('div');
    ElementPhoto.classList.add('recept-photo-view');
    ElementPhoto.innerHTML = `${'<img src= "'} ${spisok[i].photo} ${'">'}`;

    var ElementHistory = document.createElement('div');
    ElementHistory.classList.add('recept-description-view');
    ElementHistory.textContent = `${spisok[i].history}`;

    var ElementCustomLine = document.createElement('div');
    ElementCustomLine.classList.add('custom-line');

    var ElementName = document.createElement('div');
    ElementName.classList.add('recept-name-view');
    ElementName.textContent = `${spisok[i].name}`;

    recept_list.appendChild(newElement);
    newElement.appendChild(ElementPhoto);
    newElement.appendChild(ElementFullInfo);
    ElementFullInfo.appendChild(ElementCategory);
    ElementFullInfo.appendChild(ElementName);
    ElementFullInfo.appendChild(ElementCustomLine);
    ElementFullInfo.appendChild(ElementHistory);
    

    var button = document.getElementById(`${i}`);

    button.addEventListener('click', function(){

       main_menu.style.display = "none";
       start_image.style.display = "none";
       show_recept_page.style.display = "flex";
       name.innerHTML = `${spisok[i].name}`;
       ingredients.innerHTML = `${spisok[i].ingredients}`;
       time.innerHTML = `${spisok[i].time}`;
       steps.textContent = `${spisok[i].steps}`;
       description.innerHTML = `${spisok[i].description}`;
   });

}



golovna.addEventListener('click', function(){
    main_menu.style.display = "flex"
    start_image.style.display = "flex"
    show_recept_page.style.display = "none"
    create_recept_page.style.display = "none"
})

let a = 0

change_theme.addEventListener('click', function(){
    if (a == 0){
    main_menu.style.background = "#343333"
    main_menu.style.color = "white"
    change_theme.style.background = "white"
    change_theme.style.color = "black"
    show_recept_page1.style.background = "#343333"
    show_recept_page1.style.color = "white"
    show_recept_page2.style.background = "#343333"
    show_recept_page2.style.color = "white"
    view_category.style.color = "lightgray"
    view_name.style.color = "lightgray"
    view_description.style.color = "lightgray"
    a += 1
    }
    if (a == 1){
    main_menu.style.background = "white"
    main_menu.style.color = "darkgray"
    change_theme.style.background = "darkgray"
    change_theme.style.color = "white"
    show_recept_page1.style.background = "white"
    show_recept_page1.style.color = "darkgray"
    show_recept_page2.style.background = "white"
    show_recept_page2.style.color = "darkgray"
    view_category.style.color = "darkgray"
    view_name.style.color = "darkgray"
    view_description.style.color = "darkgray"  
    a -= 1
    }
})
//recept_images = []
//recept_times = []
//recept_ingredients = []
//recept_steps = []
//class Description{
//    constructor(){
//        this.recept()
//    }
//    recept(){
//        recept_names = []
//        recept_descriptions = []
//        recept_images = []
//        recept_times = []
//        recept_ingredients = []
//        recept_steps = []
//    }
//
//    save(){
//        recept_names.append(recept_name_bar.value)
//        recept_descriptions.append(recept_name_bar.value)
//        recept_images.append(recept_name_bar.value)
//        recept_times.append(recept_name_bar.value)
//        recept_ingredients_list = []
//        recept_steps_list = []
//
//       //for (let i = 0; i < recept_ingredients_bar.length; i += 1){
//       //    save_recept_button.addEventListener('click', function{
//       //        recept_ingredients.append(recept_name_bar[i].value)
//       //    })
//       //}
//
//       //for (let i = 0; i < recept_steps_bar.length; i += 1){
//       //    save_recept_button.addEventListener('click', function{
//       //        recept_steps.append(recept_steps_bar[i].value)
//       //    })
//       //}
//
//        recept_ingredients.append(recept_ingredients_list)
//        recept_steps.append(recept_steps_list)
//    }
//}


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

//for (let i = 0; i < newElement.length; i += 1){
//    newElement[i].addEventListener('click', function(){
//
//        main_menu.style.display = "none"
//        start_image.style.display = "none"
//        show_recept_page.style.display = "flex"
//        name.innerHTML = `${spisok[i].name}`
//        ingredients.innerHTML = `${spisok[i].ingredients}`
//        time.innerHTML = `${spisok[i].time}`
//        steps.textContent = `${spisok[i].steps}`
//        description.innerHTML = `${spisok[i].description}`
//    })
//}
//
//
})
