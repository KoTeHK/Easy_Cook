document.addEventListener('DOMContentLoaded', function(){
const spisok = [
    {
        "photo":"img-show1.jpg",
        "name":"Борщ",
        "description":"Щоб вам не казали і як би не переконували, але справжній український борщ - це той борщ, який варять у вашій родині. В Україні існує десятки рецептів борщу. Вони варіюються у залежності від регіону. Але в кожного борщ асоціюється зі смаком дитинства - з борщем, який варила мама чи бабуся. Пропонуємо вам класичний рецепт українського борщу. А також пропонуємо приготувати до нього пампушки з часником за нашим рецептом.",
        "category":"Супи",
        "history":" Історія: Виник ще до появи картоплі та буряка, коли основою служив борщівник. Сьогодні входить до Національного списку нематеріальної спадщини України.",
        "ingredients":"Вода – 1,5-2 л. свинина або яловичина на кістці – 400 г, картопля – 4 шт. ( середні), буряк – 2 шт. ( невеликі), морква – 1 шт. цибуля – 3 шт. ( середні), капуста білокачанна свіжа – 300 г, томатна паста – 2 ст. л.",
        "time":"1-2 години",
        "steps":"— крок 1: У підсоленій воді зварити м’ясо. Додати порізану картоплю. — крок 2: На сковорідці тушкувати на оливковій олії натерту моркву, буряк та порізану кубиком цибулю, додати томатний соус, оцет, сіль,цукор, перець. Перекласти в каструлю до м’яса та картоплі. — крок 3: Додати посічену капусту, лавровий лист, духмяний перець. Варити  близько години, до готовності. Подавати з сметаною та пампушками."

    },
    {
        "photo":"show-img2.jpg",
        "name":"Грибна юшка",
        "description":"2",
        "category":"Супи",
        "history":"Наваристий суп з білих грибів, цибулі та зелени. Часто доповнюється галушками. Секрет у використанні сушених грибів, які надають інтенсивний аромат .",
        "ingredients":"",
        "time":"",
        "steps":"" 
    },
    {
        "photo":"img-show3.jpg",
        "name":"Банош",
        "description":"Банош або бануш - найвідоміша страва української закарпатської кухні, яка готується з кукурудзяної каші з додаванням сиру і м'яса за смаком. Це ситна і недорога страва, оскільки кукурудзяна крупа є однією з найдешевших. Банош рекомендується готувати на один раз, оскільки після повторного розігрівання каша стає несмачною.",
        "category":"Українські",
        "history":"Кукурудзяна каша, зварена на вершках або молоці, з додаванням овечої бринзи, шкварок та смаженої цибулі. Традиційно готується чоловіками в чавунному посуді .",
        "ingredients":"жирні вершки або сметана — 500 мл; кукурудзяна крупа — 200 грамів; сіль за смаком; бринза або шкварки — за смаком (для подачі).",
        "time":"20-50хв",
        "steps":"Крупу промийте 2-3 рази під проточною водою. Воду залити в каструлю і довести до кипіння. Додати молоко і сметану в воду, довести до кипіння на середньому вогні. У киплячу рідину всипати промиту кукурудзяну крупу. Посолити і поперчити кашу за смаком. Варити банош до готовності, поки каша не почне легко відходити від стінок каструлі (приблизно 25-30 хвилин). Після цього додати в кашу інші інгредієнти за смаком - бринзу, сало, гриби і т. д."

    },
    {
        "photo":"img-show4.jpg",
        "name":"Голубці",
        "description":"Крокодило бомболдило",
        "category":"Страви",
        "history":"Походження: Запозичені з турецької кухні (страва «сарма»), адаптовані з використанням капустяного листя.",
        "ingredients":"фывфывфыв",
        "time":"",
        "steps":""

    },
    {
        "photo":"img-show5.jpg",
        "name":"Бограч",
        "description":"бамбини гузини",
        "category":"Українські",
        "history":"Вважається гастрономічною візитівкою Закарпаття. Готується у казані на відкритому вогні з яловичини, свинини або баранини, цибулі, моркви, картоплі та грибів. Подають у хлібній чаші для додаткового аромату .",
        "ingredients":"чсмчсмчсмчсмчсм",
        "time":"",
        "steps":""

    },
    {
        "photo":"show-img6.jpg",
        "name":"Вареники з Капустою",
        "description":"Українські вареники - універсальне блюдо, яке неможливо не любити. А капуста - одна з найулюбленіших начинок для цієї страви. М'яке повітряне тісто з соковитою начинкою підкорить будь-який шлунок. УНІАН зібрав два смачних рецепти вареників з капустою - пісний і з м'ясом.",
        "category":"Страви",
        "history":"У вареників є різні начинки: Солодкі: вишня з медом, мак, сир . Солоні: картопля з сиром, гриби з цибулею, м’ясо . На Закарпатті додають бринзу, на Чернігівщині — шкварки .",
        "ingredients":"Для тіста: Пшеничне борошно - 400 г. Яйце - 1 шт. Вода (окріп) - 200 мл.  Олія - 1 стол.л. Сіль - 0.5 чайн.л. Для начинки: Капуста білокачанна - 500 г. Лук - 1 шт. Морква - 1 шт. Сіль - 1 чайн.л. Цукор - 0.5 чайн.л. Перець чорний мелений за смаком. Олія - 3 стіл.л.",
        "time":"30хв - 1 година",
        "steps":"Начинку рекомендується приготувати перед тістом, оскільки вона має повністю охолонути. Капусту нашаткувати тонкою соломкою і пом'яти руками. Злити сік, що виділився. Викласти капусту в сковороду з гарячою олією і смажити приблизно 7 хвилин на маленькому вогні. Натерти моркву на тертці і дрібно порубати цибулю. Додати овочі до капусти. Тушкувати разом під кришкою 20 хвилин. Готовність овочів визначати по самим товстим шматочках капусти - вони мають стати м'якими. В кінці додати в начинку сіль, цукор і перець. Поки остигає начинка, приготуйте тісто. Борошно просіяти гіркою в глибоку миску. Посередині зробити поглиблення. В окрему ємність розбити яйце і збити його з сіллю і ложкою олії. Вилити яйце в борошно. Потім влити в борошно окріп і замісити тісто ложкою, поки воно злегка не охолоне. Потім вимісити тісто руками, поки воно не перестане липнути. Розділити тісто на однакові кульки і тонко розкачати. У кожен кружечок посередині викласти начинку з капусти і защипнути вареники. Закип'ятити воду у великій каструлі і варити вареники, поки вони не спливуть на поверхню (приблизно 5 хвилин). Рекомендується подавати вареники зі сметаною і смаженою цибулею. Зліплені вареники можна заморозити. Перед заморожуванням їх слід рясно посипати борошном."

    }
]  






// header-menu //
let golovna = document.querySelector('.golovna')
let change_theme1 = document.querySelector('.change-theme1')
let change_theme2 = document.querySelector('.change-theme2')
// body //
let recept_list = document.querySelector('.recept-list')
let start_image = document.querySelector('.start-image')
let main_menu = document.querySelector('.main-menu')
let show_recept_page = document.querySelector('.show-recept-page')
let create_recept_page = document.querySelector('.create-recept-page')
let view_name = document.querySelectorAll('.recept-name-view')
let view_description = document.querySelectorAll('.recept-description-view')
let view_photo = document.querySelectorAll('.recept-photo-view')
// 3 сторінка //
let image = document.querySelector('.show-recept-image1')
let show_recept_page1 = document.querySelector('.show-left-column')
let show_recept_page2 = document.querySelector('.show-right-column')
let time = document.querySelector('.show-recept-time')
let ingredients = document.querySelector('.show-recept-ingredients')
let name = document.querySelector('.show-recept-name')
let description = document.querySelector('.show-recept-description')
let steps = document.querySelector('.show-recept-steps')

let view_category = document.querySelectorAll('.recept-category-view')




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
       ingredients.innerHTML = `Інгредієнти: ${spisok[i].ingredients}`;
       time.innerHTML = `Час готування: ${spisok[i].time}`;
       steps.textContent = `${spisok[i].steps}`;
       description.innerHTML = `${spisok[i].description}`;
       image.innerHTML = `${'<img src= "'} ${spisok[i].photo} ${'">'}`
    });

    var stravi = document.querySelector('.stravi')
    var soup = document.querySelector('.soup')
    var all = document.querySelector('.all')
    var ukranian = document.querySelector('.ukranian')
  
    stravi.addEventListener('click', function(){
        let straviElement = document.getElementById(`${i}`);
        straviElement.classList.remove('hide');
        if (straviElement) {
            if (`${spisok[i].category}` !== 'Страви'){
                straviElement.classList.add('hide');
            }
        } 
    });

    soup.addEventListener('click', function(){
        let popElement = document.getElementById(`${i}`);
        popElement.classList.remove('hide');
        if (popElement) {
            if (`${spisok[i].category}` !== 'Супи'){
                popElement.classList.add('hide');
            }
        } 
    });
    

    ukranian.addEventListener('click', function(){
        let ukranianElement = document.getElementById(`${i}`);
        ukranianElement.classList.remove('hide');
        if (ukranianElement) {
            if (`${spisok[i].category}` !== 'Українські'){
                ukranianElement.classList.add('hide');
            }
        } 
    });

    all.addEventListener('click', function(){
        let allElement = document.getElementById(`${i}`);
        if (`${spisok[i].category}` !== "GG") {
            allElement.classList.remove('hide');
            }
        });
}



golovna.addEventListener('click', function(){
    main_menu.style.display = "flex"
    start_image.style.display = "flex"
    show_recept_page.style.display = "none"
    create_recept_page.style.display = "none"
})

const checkbox = document.getElementById('switch');
    checkbox.addEventListener('change', function(){
        main_menu.style.background = checkbox.checked ? "#343333": "white";
        main_menu.style.color = checkbox.checked ? "white": "darkgray";
        show_recept_page1.style.background = checkbox.checked ? "#343333": "white";
        show_recept_page1.style.color = checkbox.checked ? "white": "darkgray";
        show_recept_page2.style.background = checkbox.checked ? "#343333": "white";
        show_recept_page2.style.color = checkbox.checked ? "lightgray": "darkgray";
        view_category.style.color = checkbox.checked ? "gray": "darkgray";
        view_name.style.color = checkbox.checked ? "gray":  "darkgray";
        view_description.style.color = checkbox.checked ? "gray": "darkgray"; 
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
