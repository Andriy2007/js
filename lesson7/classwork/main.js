//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        console.log(`модель - ${this.model}, виробник - ${this.producer}, рік - ${this.year}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarClass {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
        drive () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        };
        info() {
            console.log(`модель - ${this.model}, виробник - ${this.producer}, рік - ${this.year}`);
        };
        increaseMaxSpeed(newSpeed) {
            this.maxSpeed = this.maxSpeed + newSpeed;
        };
        changeYear(newValue) {
            this.year = newValue;
        };
        addDriver(driver) {
            this.driver = driver;
        };
}


//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Quine {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let quines = [
    new Quine('Quine1', 12, 30),
    new Quine('Quine2', 13, 32),
    new Quine('Quine3', 14, 34),
    new Quine('Quine4', 15, 36),
    new Quine('Quine5', 16, 38),
    new Quine('Quine6', 17, 40),
    new Quine('Quine7', 18, 42),
    new Quine('Quine8', 19, 44),
    new Quine('Quine9', 20, 46),
    new Quine('Quine10', 21, 48),

]
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Prince('prince', 16, 38);
let quine = quines.find(value => value.size === prince.shoe);
