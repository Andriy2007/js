//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
 function createMinNumber(a, b, c) {
   if (a < b && a < c) {
             console.log(a);
         } else if (b < c && b < a) {
            console.log(b);
         } else {
            console.log(c);
         }
     }


//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
  function createMaxNumber(a, b, c) {
    if (a > b && a > c) {
         console.log(a);
        } else if (b > c && b > a) {
         console.log(b);
        } else {
         console.log(c);
        }
    }


//- створити функцію яка повертає найбільше число з масиву
   let maxArray = [10,48,171,52,4,666,70000,88,999]
   function  arrayMax(numbers) {
     let max = numbers[0];
     for (const number of numbers) {
         if(number > max){
             max = number;
         }
     }
     return max;
 }
document.write(`найбільше число з масиву: ${arrayMax(maxArray)}`)



//- створити функцію яка повертає найменьше число з масиву
let minArray = [10,48,171,52,4,666,70000,88,999]
function  arrayMin(numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if(number < min){
            min = number;
        }
    }
    return min;
}
document.write(`найменьше число з масиву: ${arrayMin(minArray)}`)


//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumArray = [1,3,6,10];
 function sumElement (numbers){
     let result = 0;
     for (const number of numbers) {
         result = result + number;
     }
     return result;
 }
 document.write(sumElement(sumArray))


//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let avgArray = [1,2,3];
 function avg (numbers){
     let result = 0;
     for (const number of numbers) {
         result = result + number;
     }
     return result/numbers.length;
 }
 document.write(avg(avgArray))


//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minmaxArray(arg) {
    let max = arguments[0];
    let min = arguments[0];
    for (const number of arguments) {
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
document.write('Мінімальне число: ' + minmaxArray(100, 20, 3, 100, 2021))


//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function randomArray (arr) {
     for (let i = 0; i < arr; i++){
         arr[i] = Math.floor(Math.random()*100);
     }
 return arr;
 }
 document.write(randomArray(12))


//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function randommArray (arr, limit) {
    for (let i = 0; i < arr; i++){
        arr[i] = Math.floor(Math.random()*limit);
    }
    return arr;
}
document.write(randommArray(12))

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
 function reverse(arr) {
    let item = [];
     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
         const itemArr = item[i];
         item[ri] = itemArr[i];
     }
     return item;
 }