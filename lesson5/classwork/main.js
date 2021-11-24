//Всі функції повинні бути описані стрілочним типом!!!!
//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let createMinNumber = (a, b, c) =>  {
     if (a < b && a < c) {
         console.log(a);
     } else if (b < c && b < a) {
         console.log(b);
     } else {
         console.log(c);
     }
 };
createMinNumber(20, 100, 30);


//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let createMaxNumber = (a, b, c) => {
     if (a > b && a > c) {
         console.log(a);
     } else if (b > c && b > a) {
         console.log(b);
     } else {
         console.log(c);
     }
 };
createMaxNumber(20, 100, 30);


//- створити функцію яка повертає найбільше число з масиву
let maxArray = [10,30,2,750,1,60,400,7,50000];
 let arrayMax = (array) => {
     let max = array[0];
     for (const number of array) {
         if(number > max){
             max = number;
         }
     }
     return max;
 }
console.log(`найбільше число з масиву: ${arrayMax(maxArray)}`)


//- створити функцію яка повертає найменьше число з масиву
let minArray = [10,30,2,750,1,60,400,7,50000]
 let arrayMin = (array) => {
     let min = array[0];
     for (const number of array) {
         if(number < min){
             min = number;
         }
     }
     return min;
 }
console.log(`найменьше число з масиву: ${arrayMin(minArray)}`)


//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumArray = [1,3,6,10];
 let sumElement =  (array) => {
     let sum = 0;
     for (const arrayElement of array) {
         sum = arrayElement + sum;
     }
     return sum;
 }
console.log(sumElement(sumArray));


//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let avgArray = [1,2,3];
 let avg =  (array) => {
     let result = 0;
     for (const number of array) {
         result = number + result;
     }
     return result/array.length;
 }
console.log(avg(avgArray));


//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let minmaxArray = (...arg) => {
   let min = arg[0];
   let max = arg[0];
     for (const number of arg) {
         if (number > max) {
             max = number;
         }
         if (number < min) {
             min = number;
         }
     }
     console.log("max ", max);
     return min;
 }
console.log("min " + minmaxArray(100, 20, 3, 100, 2021))


//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let randomArray = (arr)=> {
    let arrayEmpty = [];
     for (let i = 0; i < arr; i++){
         arrayEmpty.push(Math.floor(Math.random()*100));
     }
 return arrayEmpty
 };

 console.log(randomArray(12))


//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randommArray = (arr,limit) => {
     let emptyArray = [];
     for (let i = 0; i < arr; i++) {
         emptyArray.push(Math.round(Math.random() * limit));
     }
     return emptyArray;
 }
console.log(randommArray(10,100));


//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let array = [1, 2, 3, 4]
 let reverse = (arr) => {
     let item = [];
     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
         item[ri] = arr[i];
         ri < arr.length;
     }
     return item;
 }
 console.log(reverse(array));