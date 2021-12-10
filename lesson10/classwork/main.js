//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
document.getElementById('btn').onclick = function () {
    let zzz1 = document.forms.form1.zzz1.value;
    let xxx1 = document.forms.form1.xxx1.value;
    let zzz2 = document.forms.form2.zzz2.value;
    let xxx2 = document.forms.form2.xxx2.value;
    console.log(zzz1, xxx1, zzz2, xxx2);
};

//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//(Додатковачастина для завдання)
let form = document.forms['tabCreator'];
form.onsubmit = function (e) {
    e.preventDefault();
    let line = +form.line.value;
    let columns = +form.columns.value;
    let content = form.content.value;
    console.log(line, columns, content)
    let table = document.createElement('table');
    document.body.appendChild(table);
    for (let i = 0; i < line; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < columns; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.innerText = content;
        }
    }
};
//- Сворити масив не цензцрних слів.
//    Сворити інпут текстового типу.
//   Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//кинути алерт з попередженням.
//Перевірку робити при натисканні на кнопку
/*let badWords = ['lox', 'blyat', 'syka', 'chmo', 'kyrva'];
let btnn = document.getElementById('btnn');
btnn.onclick = function () {
    let word = document.getElementById('bad').value;
    for (const badWord of badWords) {
        if (badWord === word) {
            alert('Вжито не літературне слово');
        }
    }
};
*/
//- Сворити масив не цензцрних слів.
//    Сворити інпут текстового типу.
//    Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//    Кинути алерт з попередженням у випадку якщо містить.
//    Перевірку робити при натисканні на кнопку
let badWords = ['lox', 'blyat', 'syka', 'chmo', 'kyrva'];
let btnn = document.getElementById('btnn');
btnn.onclick = function () {
    let word = document.getElementById('bad').value;
    for (const badWord of badWords) {
        if (word.includes(badWord)) {
            alert('Вжито не літературне слово');
        }
    }
};