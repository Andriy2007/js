//Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

//    - Напишіть код,  котрий :
//-- отримує текст з параграфа з id "content"
let pList = document.getElementsByTagName('p');
let p = pList[0];
console.log(p);
//-- отримує текст з блоку з id "rules"
let classFcBp = document.getElementsByClassName('fc bp');
let fc = classFcBp[0];
console.log(fc);

//-- замініть текст параграфа з id 'content' на будь-який інший
let tagP = document.getElementsByTagName('p');
tagP[0].innerText = 'fadfdsgfsdgfshdf';


//-- замініть текст параграфа з id 'rules' на будь-який інший
 let classFc = document.getElementsByClassName('fc bp');
classFc[0].innerText = 'czxvcxbcvnvbmnbnjghj';

//-- змініть кожному елементу колір фону на червоний
let idContent = document.getElementById('content')
idContent.style.backgroundColor = 'red';

let idRules = document.getElementById('rules')
idRules.style.backgroundColor = 'red';

let tagUl = document.getElementsByTagName('ul');
let xxx = tagUl[0];
xxx.style.backgroundColor = 'red'


//-- змініть кожному елементу колір тексту на синій
let contentId = document.getElementById('content')
contentId.style.color = 'blue';

let Fclass = document.getElementById('rules')
Fclass.style.color = 'blue';

let tagLi = document.getElementsByTagName('li');
let zzz = tagLi[0];
zzz.style.color = 'blue'



//-- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesId = document.getElementById('rules')
console.log(rulesId.classList)


//-- поміняти колір тексту у всіх елементів fc_rules на червони
let classFCrules = document.getElementsByClassName('fc_rules');
console.log(classFCrules);
for (const li of classFCrules) {
    li.style.color = 'red'
}
