//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника
let sPrym = (a, b) => a * b;
  console.log(sPrym(6, 8));


// - створити функцію яка обчислює та повертає площу кола
let sKolo = (r) => 3.14 * r *r;
  console.log(sKolo(5));


// - створити функцію яка обчислює та повертає площу циліндру
 let sCilindr = (r, h) => 2 * 3.14 * r * h;
  console.log(sCilindr(5,10));


// - створити функцію яка приймає масив та виводить кожен його елемент
let  giveArray1 = [1,2,3, 'Andriy', 'Savchuk'];
 let itemArray =  (array) => {
     for (let i = 0; i < array.length; i++) {
         console.log(array[i]);
     }
 }
itemArray( giveArray1);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let creatP =  (text) => {
    document.write(`<p>${text}</p>`);
 }
creatP('Andriy');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
 let createUl = (arg) => {
     document.write(`<ul>`);
     document.write(`<li>${arg}</li>`);
     document.write(`<li>${arg}</li>`);
     document.write(`<li>${arg}</li>`);
     document.write(`</ul>`);
 }
 createUl('Item');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
 let createUl2 = (text, size) => {
     document.write(`<ul>`)
     for (let i = 0; i < size; i++) {
         document.write(`<li>${text}</li>`);
     }
     document.write(`</ul>`)
 }
createUl2('hello', 3);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let  giveArray2 = ['Andriy Savchuk', 1999, 'hello', false];
 let itemArray2 = (array) => {
     document.write(`<ul>`)
         for (let i = 0; i < array.length; i++) {
             document.write(`<li>${array[i]}</li>`);
         }
     document.write(`</ul>`)
 }
itemArray2(giveArray2);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let giveArrayObject = [{id: 1, name: 'Andriy', age: 22}, {id: 2, name: 'Yaryna', age: 20}, {id: 3, name: 'Kasper', age: 5}];
 let objectArray = (array) => {
     for (const item of array) {
         document.write(`<div>${item.id}.${item.name} - ${item.age}</div>`);
     }
 }
objectArray(giveArrayObject);