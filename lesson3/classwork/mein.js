// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
 let general = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
 i = 0;
 while (i < general.length){
     console.log(general[i]);
     i++
 }

// 2. перебрати його циклом for
 for (let i = 0; i < general.length; i++){
    console.log(general[i]);
 }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
 i = 0;
 while (i < general.length){
     if (i%2 !== 0){
        console.log(general[i]);
    }
    i++
 }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
 for (let i = 0; i < general.length; i++){
    if (i%2 !== 0){
        console.log(general[i]);
    }
 }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
 i = 0;
 while (i < general.length){
     if (i%2 === 0){
        console.log(general[i]);
    }
    i++
 }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
 for (let i = 0; i < general.length; i++){
    if (i % 2 === 0 && i !== 0){
        console.log(general[i]);
    }
 }

// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < general.length; i++){
   if (general[i]%3 === 0){
       general[i] = "okten";
        console.log(general[i]);
   }
 }
 console.log(general);

// 8. вивести масив в зворотньому порядку.
 let generalBack = [2,17,13,6,22,31,45,66,100,-18];
 for (let i = generalBack.length-1; i >= 0; i--){
     console.log(generalBack[i]);
 }

//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)