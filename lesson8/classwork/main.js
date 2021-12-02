//Взяти файл template_2.html та працювати в ньому
//1) Напишіть код, який :
//a) додає клас з назвою групи, елементу з ід main_header
let idMainHeader = document.getElementById('main_header');
idMainHeader.innerText = 'Python';


//b) робить шириниу елементу ul 400px
let tagUl = document.getElementsByTagName('ul');
tagUl[0].style.width = '400px';


//c) робить шириниу всіх елементів з класом linkList шириною 50%
let classLinklist = document.getElementsByClassName('linkList');
 for (const zzz of classLinklist) {
    zzz.style.width = '50%';
 }

//d) отримує текст який зберігається в елементі з класом listElement2
let classListElements2 = document.getElementsByClassName('listElement2');
 console.log(classListElements2);
classListElements2[0].innerHTML = '<a href=""><b>asdasfdgdsgsf</b></a>';

//e) отримує всі елементи li та змінює ім колір фону на сірий
let tagLi = document.getElementsByTagName('li');
 console.log(tagLi);
 for (const xxx of tagLi) {
     xxx.style.backgroundColor = 'grey';
 }

//f) отримує всі елементи 'a' та додає їм клас anchor
let tagA = document.getElementsByTagName('a');
 console.log(tagA);
 for (let ccc of tagA) {
     ccc.classList.add('anchor')
     console.log(ccc);
 }

//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let aTag = document.getElementsByTagName('a');
 console.log(aTag);
 for (let vvv of aTag) {
     console.log(vvv);
     if (vvv.innerText === 'link3') {
         vvv.style.fontSize = '40px';
     }
 }

//h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let elementsNameA = document.getElementsByTagName('a');
 console.log(elementsNameA);
 for (let bbb of elementsNameA) {
     console.log(bbb);
     let newClassXXX = bbb.innerText
     bbb.classList.add(`element_${newClassXXX}`)
 }

//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let classSubHeader = document.getElementsByClassName('sub-header');
 console.log(classSubHeader);
classSubHeader[0].style.color = prompt('Enter color pls: (blue, black, red)');
classSubHeader[1].style.color = prompt('Enter color pls: (blue, black, red)');


//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let subHeaderClass = document.getElementsByClassName('sub-header');
 for (const nnn of subHeaderClass) {
     console.log(nnn);
     if (nnn.innerText === 'content 2 segment') {
         nnn.style.color = prompt('Enter color pls: (blue, black, red)');
     }
 }


//k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let classContent_1 = document.getElementsByClassName('content_1');
 console.log(classContent_1[0].innerText);
 classContent_1[0].innerText = prompt('Enter text');


//l) отримати елементи p та змінити їм padding на 20px
let tagP = document.getElementsByTagName('p');
 for (const qqq of tagP) {
     qqq.style.padding = '20px';
 }

//m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let classText2 = document.getElementsByClassName('text2');
 console.log(classText2)
 classText2[0].innerText = 'sep-2021';
