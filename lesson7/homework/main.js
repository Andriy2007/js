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
    new User(2, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231'),
    new User(3, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231'),
    new User(4, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231'),
    new User(5, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231'),
    new User(6, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231'),
    new User(7, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231'),
    new User(8, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231'),
    new User(9, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231'),
    new User(10, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231')
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
let clients = [
    new Client(1, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231'),
    new Client(2, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231'),
    new Client(3, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231'),
    new Client(4, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231'),
    new Client(5, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231'),
    new Client(6, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231'),
    new Client(7, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231'),
    new Client(8, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231'),
    new Client(9, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231'),
    new Client(10, 'andriy', 'savchuk', 'andriy@gmail.com)', '+380931231231')
]

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let cilentsSort = clients.sort((a, b) => a.order.length - b.order.length);