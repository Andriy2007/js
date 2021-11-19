//--створити масив з:
//- з 5 числових значень
//- з 5 стічкових значень
//- з 5 значень стрічкового, числового та булевого типу
//- та вивести його в консоль

/* let number = [1,2,3,4,5];

 let str = ['a','b','c','d','e'];

 let all = ['xxx', 'ccc', 34, 67, true, false];
console.log(number);
console.log(str);
console.log(all);

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

 let zzz = [];
 zzz[0] = 'first';
 zzz[1] = 'second';
 zzz[2] = 'third';
 console.log(zzz);

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

for (let i = 0; i < 10; i++) {
     document.write(`<div>item</div>`);
 }
 for (let i = 0; i < 10; i++) {
     document.write(`<div>${i} - qqq</div>`);
 }
 let q =0;
 while(q<20){
    document.write(`<h1>www</h1>`);
    q++;
 }
 let w =0;
 while(w<20){
     document.write(`<h1>${w} - eee</h1>`);
     w++;
 }

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 for (let y = 0; y < numbers.length; y++) {
     const yyy = numbers[y];
   //  console.log(yyy);
 }

let str = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
for (let u = 0; u < str.length; u++) {
    const uuu = str[u];
  //  console.log(uuu);
}

let all = ['andriy', 'savchuk', 'hello', 34, 68, 44, 88, 24, true, false];
for (let o = 0; o < all.length; o++) {
    const ooo = all[o];
 //   console.log(ooo);
}

let first = ['andriy', 'savchuk', 'hello', 34, 68, 44, 88, 24, true, false];
for (g = 0; g < first.length; g++) {
    if (typeof first[g] === 'boolean') {
        console.log(first[g]);
    }
 }

let second = ['andriy', 'savchuk', 'hello', 34, 68, 44, 88, 24, true, false];
for (h = 0; h < second.length; h++) {
    if (typeof second[h] === 'number') {
        console.log(second[h]);
    }
}

let third = ['andriy', 'savchuk', 'hello', 34, 68, 44, 88, 24, true, false];
for (j = 0; j < third.length; j++) {
    if (typeof third[j] === 'string') {
        console.log(third[j]);
    }
} */

//Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

let container = [];
container[0] = 'andriy';
container[1] = 'savchuk';
container[2] = 'hello';
container[3] = 34;
container[4] = 68;
container[5] = 44;
container[6] = 88;
container[7] = 24;
container[8] = true;
container[9] = false;
for (let s = 0; s < container.length; s++) {
    const sss = container[s];
       console.log(sss);
       document.write(sss);
}

for (let s = 0; s < 10; s++) {
    const sss = container[s];
    console.log(sss);
    document.write(sss);
}

for (let s = 0; s < 100; s++) {
    const sss = container[s];
    console.log(sss);
    document.write(sss);
}

for (let s = 0; s < 100; s +=2) {
    const sss = container[s];
    console.log(sss);
    document.write(sss);
}

for (let s = 0; s < 100; s++) {
    if (s % 2 === 0 && s !== 0) {
        console.log(s)
        document.write(s);
    }
}

for (let s = 0; s < 100; s++) {
    if (s % 3 === 0 && s !== 0) {
        console.log(s)
        document.write(s);
    }
}