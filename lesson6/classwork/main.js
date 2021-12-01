//- Дано список імен.
//let n1 = 'Harry..Potter'
//let n2 = 'Ron---Whisley'
//let n3 = 'Hermione__Granger'
//Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//let n1 = 'Harry Potter'
//let n2 = 'Ron Whisley'
//let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
 function replaceName(name)  {
 return n2
     .replaceAll('..', ' ')
     .replaceAll('---', ' ')
     .replaceAll('__', ' ');
}
console.log(replaceName(n2))


//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function randomNumber(number) {
 let arr = [];
 for (let i =0; i <number; i++) {
  arr.push(Math.round(Math.random() * 100));
 }
 return arr;
}

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let arrayR = randomNumber(10);
arrayR.sort((a, b) => a - b);
arrayR.sort((a, b) => b - a);


//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let arrayT = randomNumber(10);
arrayT.filter(value => value % 2 === 0);


//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arrayY = randomNumber(10);
arrayT.map(value => value + '');

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
 //   let nums = [11,21,3];
//sortNums('ascending') // [3,11,21]
//sortNums('descending') // [21,11,3]
function sortNums(direction) {
 let sortedArray = [];
 if (direction === 'zzz') {
  sortedArray = numbers.sort((a, b) => a - b);
 } else if  (direction === 'desc') {
  sortedArray = numbers.sort((a, b) => b - a);
 }
 return sortedArray;
}
sortNums([1, 2, 3], 'zzz')


//- є масив
let coursesAndDurationArray = [
   {title: 'JavaScript Complex', monthDuration: 5},
   {title: 'Java Complex', monthDuration: 6},
   {title: 'Python Complex', monthDuration: 6},
   {title: 'QA Complex', monthDuration: 4},
   {title: 'FullStack', monthDuration: 7},
   {title: 'Frontend', monthDuration: 4}
];
//-- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));


//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5));