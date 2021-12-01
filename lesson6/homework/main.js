//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
 let str1 = 'hello world';
  console.log(str1.length);

let str2 = 'lorem ipsum';
console.log(str2.length);

let str3 = 'javascript is cool';
console.log(str3.length);


//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
let str11 = 'hello world';
let toUpperCase1 = str11.toUpperCase();
console.log(toUpperCase1);

let str12 = 'lorem ipsum';
let toUpperCase2 = str12.toUpperCase();
console.log(toUpperCase2);

let str13 = 'javascript is cool';
let toUpperCase3 = str13.toUpperCase();
console.log(toUpperCase3);



//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str21 = 'HELLO WORLD';
let toLowerCase1 = str21.toLowerCase();
console.log(toLowerCase1);

let str22 = 'LOREM IPSUM';
let toLowerCase2 = str22.toLowerCase();
console.log(toLowerCase2);

let str33 = 'JAVASCRIPT IS COOL';
let toLowerCase3 = str33.toLowerCase();
console.log(toLowerCase3);


//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let trim = str.trim();
console.log(trim);


//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//let str = 'Каждый охотник желает знать';
//let arr = stringToarray(str);
//document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

 let stringToarray = (str5) => {
      return str5.split(' ');
  }
  let str5 = 'Каждый охотник желает знать';
  let arr = stringToarray(str5);
  document.writeln(arr);



//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//let str = 'Каждый охотник желает знать';
//document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str6, lenght) => {
   return str6.substring(0, lenght);
};
let str6 = 'Каждый охотник желает знать';
document.writeln(delete_characters(str6, 7));


//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//  let str = "HTML JavaScript PHP";
//document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

function insert_dash(str7)  {
 return str7.replaceAll(' ', '-').toUpperCase();
}
let str7 = "HTML JavaScript PHP";
console.log(insert_dash(str7));



//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
function changeUp(str8) {
 return str8[0].toUpperCase() + str8.slice(1);
}
console.log(changeUp('andriy'));

