//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
//створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    new User(1, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231'),
    new User(2, 'yaryna', 'domashov', 'yaryna@gmail.com)', '+380933030522'),
    new User(3, 'sofia', 'kiriy', 'sofiay@gmail.com)', '+380631237863'),
    new User(4, 'solomia', 'copit', 'solomia@gmail.com)', '+380938903404'),
    new User(5, 'roman', 'zybuk', 'roman@gmail.com)', '+380938564985'),
    new User(6, 'tanya', 'has', 'tanya@gmail.com)', '+380939998746'),
    new User(7, 'maria', 'gapon', 'maria@gmail.com)', '+380930098567'),
    new User(8, 'victor', 'gavdan', 'victor@gmail.com)', '+380937590438'),
    new User(9, 'oleg', 'sava', 'oleg@gmail.com)', '+380931889479'),
    new User(10, 'olya', 'golinchak', 'olya@gmail.com)', '+380937774930')
]

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredUsers = users.filter(value => value.id % 2 === 0);


//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = users.sort((a, b) => a.id - b.id);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
//створити пустий масив, наповнити його 10 об'єктами Client
let Clients = [
    new Client(11, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231', ['zzz', 'xxx']),
    new Client(22, 'yaryna', 'domashov', 'yaryna@gmail.com)', '+380933030522', ['zzz']),
    new Client(3, 'sofia', 'kiriy', 'sofiay@gmail.com)', '+380631237863', ['zzz', 'xxx', 'ccc']),
    new Client(4, 'solomia', 'copit', 'solomia@gmail.com)', '+380938903404', ['xxx']),
    new Client(5, 'roman', 'zybuk', 'roman@gmail.com)', '+380938564985', ['zzz', 'xxx']),
    new Client(6, 'tanya', 'has', 'tanya@gmail.com)', '+380939998746', ['zzz', 'xxx', 'vvv']),
    new Client(7, 'maria', 'gapon', 'maria@gmail.com)', '+380930098567', ['zzz', 'xxx', 'vvv', 'bbb']),
    new Client(8, 'victor', 'gavdan', 'victor@gmail.com)', '+380937590438', ['zzz', 'xxx', 'bbb']),
    new Client(9, 'oleg', 'sava', 'oleg@gmail.com)', '+380931889479', ['bbb']),
    new Client(10, 'olya', 'golinchak', 'olya@gmail.com)', '+380937774930', ['vvv'])
]
console.log(Clients)
//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let cilentsSort = Clients.sort((a, b) => a.order.length - b.order.length);
console.log(cilentsSort)