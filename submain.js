document.addEventListener('DOMContentLoaded', function(){
    
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
let view_name = document.querySelector('.recept-name-view')
let view_category = document.querySelector('.recept-category-view')
let view_description = document.querySelector('.recept-description-view')
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


// create_recept.addEventListener('click', function(){

//    show_recept_page.style.display = "none"
//    main_menu.style.display = "none"
//    start_image.style.display = "none"
//    create_recept_page.style.display = "flex"
//})
//
golovna.addEventListener('click', function(){
    main_menu.style.display = "flex"
    start_image.style.display = "flex"
    show_recept_page.style.display = "none"
    create_recept_page.style.display = "none"
})

change_theme.addEventListener('click', function(){
    
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

for (let i = 0; i < recept_card.length; i += 1){
    recept_card[i].addEventListener('click', function(){

        main_menu.style.display = "none"
        start_image.style.display = "none"
        show_recept_page.style.display = "flex"
        let recept_names = ['Борщ','2','3','4','5','6']
        let recept_descr = ['Історія: Виник ще до появи картоплі та буряка, коли основою служив борщівник. Сьогодні входить до Національного списку нематеріальної спадщини України.',
                            'jkjkjk',
                            'asdasdas',
                            'asdasd',
                            'asdasdad',
                            'asdasdasd']
        let times = ['2 години','','','','','']
        let steps_list = ['Спочатку беру ребра, ріжу на шматочки та обжарюю з усіх сторін до золотавого кольору. Потім кладу в каструлю, додаю цибулину цілу, квасолю та варю годину. Тим часом буряк, моркву ріжу дуже тоненькими паличками, не тру, а саме ріжу.Фото кроку 1 до Борщ. 2 На сковороді тушу порізану цибулю, буряк та моркву. Трохи додаю бульйону, томатну пасту і на невеликому вогні протушую. Через годину додаю порізану картоплю, піджарку з буряка. Варю ще 20 хвилин. Потім додаю дрібно посічену капусту. На цьому етапі солю, перчу, додаю лавровий лист. Фото кроку 2 до Борщ. 3 Я дуже люблю борщ саме з червоним буряком і щавлем. Тому коли весна завжди його додаю за 15 хвилин до кінця приготування. Борщ пробую на смак, і тут вже коригую, чи треба цукор, чи сіль. На невеликому вогні варю до готовності. Але чесно скажу, люблю його на другий день)))) смачного!!!!',
                            'asdasdasd',
                            'asdasdasd',
                            'asdasdasd',
                            'asdasdasd',
                            'asdasdasd']
        let ingredients_list = ['2 л води 3-4 картоплі 2 буряки 1 цибуля ріпчаста 200 г квашеної капусти (з розсолом) ½ моркви ½ болгарського перцю 1-2 ст. л. меду 2 ст. л. томатної пасти солі та перцю — на смак',
                        '',
                        '',
                        '',
                        '',
                        ''
        ]
        name.innerHTML = recept_names[i]
        ingredients.innerHTML = ingredients_list[i]
        time.innerHTML = times[i]
        steps.textContent = steps_list[i]
        description.innerHTML = recept_descr[i]
        
        
        if (i == 0){
            image1.style.display = inline-block
        }

        if (i == 1){
            image2.style.display = inline-block
        }

        if (i == 2){
            image3.style.display = flex 
        }

        if (i == 3){
            image4.style.display = flex 
        }

        if (i == 4){
            image5.style.display = flex 
        }

        if (i == 5){
            image6.style.display = flex 
        }
    })
}


})
