//Все робити за допомоги js.
//- створити блок,
let div = document.createElement('div');


//- додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');


//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.backgroundColor = 'red';
div.style.color = 'blue';
div.style.fontSize = '100px';


//- додати цей блок в body.
document.body.appendChild(div);


//- клонувати його повністю, та додати клон в body.
let cloneDiv = div.cloneNode(true);
document.body.appendChild(cloneDiv);


//- Є масив:['Main','Products','About us','Contacts']
//Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
//Завдання робити через цикли.
let menu = document.getElementsByClassName('menu')[0];
let menuItems = ['Main','Products','About us','Contacts'];
  for (const items of menuItems) {
      let li = document.createElement('li');
      li.innerText = items;
      menu.appendChild(li);
  }
//- Є масив
//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course of coursesAndDurationArray) {
    let elementDiv = document.createElement('div');
    elementDiv.innerText = `${course.title} ${course.monthDuration}`;
    document.body.appendChild(elementDiv);
}
//- Є масив
//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course of coursesAndDurationArray2) {
    let divElementt = document.createElement('div');
    divElementt.setAttribute('class', 'item');
    let h1 = document.createElement('h1');
    h1.innerText = course.title;

    let p = document.createElement('p');
    p.innerText = course.monthDuration;


    divElementt.appendChild(h1);
    divElementt.appendChild(p);
    document.body.appendChild(divElementt);
}