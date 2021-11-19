//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
 function sPrmk(a, b) {
    return a * b;
 }

//- створити функцію яка обчислює та повертає площу кола з радіусом r
 function sKolo(r) {
    return 3.14 * r * r;
 }

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
 function sCilindr(r, h) {
    return 2 * 3.14 * r * h;
 }

//- створити функцію яка приймає масив та виводить кожен його елемент
 function giveArray1(arr) {
    for (const item of arr) {
        console.log(item);
    }
 }

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
 function createP(text) {
    document.write(`<p>${text}</p>`);
 }

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
 function createUl1(arg) {
    document.write(`<ul>`)
    document.write(`<li>${arg}</li>`)
    document.write(`<li>${arg}</li>`)
    document.write(`<li>${arg}</li>`)
    document.write(`</ul>`)
 }

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
 function createUl2(text, size) {
    document.write(`<ul>`);
    for (let i = 0; i < size; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
 }

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function giveArray2(arr) {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`)
}


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
 function giveArrayObject (arr) {
    for (const item of arr) {
        document.write(`<div>${item.id} - ${item.name} - ${item.age}</div>`)
    }
 }