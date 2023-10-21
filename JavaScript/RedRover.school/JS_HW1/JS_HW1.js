// 1.1 Объявите две переменные: firstName и lastName.
// 1.2 Передайте значение “John”в переменную firstName и значение “Adams”  в переменную lastName.
// 1.3 Выведите на страницу значение firstName и lastName (должно показать John Adams).
// 1.4 Используйте те же переменные (перезапишите) firstName и lastName для того, чтобы вывести новое значение (Anna Karenina).
// 
// В итоге на экране должно быть две строки:
// John Adams
// Anna Karenina

let firstName = 'John'
let lastName = 'Adams'

console.log(firstName, lastName)

firstName = 'Anna'
lastName = 'Karenina'

console.log(firstName, lastName, '\n')

// 2  Выведите в консоль тип данных следующих переменных:
//    let a, let c = 9, let str = “Hi 5!”, let b = true, let y = 9 + ‘1’, let x =  'a' / 6

let a
let c = 9
let str = 'Hi 5!'
let b = true
let y = 9 + '1'
let x =  'a' / 6

console.log(typeof(a) + '\n' + typeof(c) + '\n' + typeof(str) + '\n' + typeof(b) + '\n' + typeof(y) + '\n' + typeof(x), '\n')

// 3 Подумайте, какие переменные логично объявить через const. Придумайте 3 разных,  объявите их и выведите на экран

const pi = 3.14
const e = 2.71
const day = 24

console.log(pi + '\n' + e + '\n' + day, '\n')

// Креативное задание*:
// 1.5 Напишите пошаговый алгоритм приготовления кофе и выведите его на экран (страницу).
// Желательно пронумеровать шаги. Каждый шаг должен быть выведен с новой строки.

let recipe = "Coffee recipe"
let water = 'still water'
let coffee = 'black coffee'
let sugar = 'cane sugar'
let milk = 'milk'
let result = 'Your coffee is ready!'

step1 = `1. Boil the ${water}`
step2 = `2. Fill up the ${coffee}`
step3 = `3. Put 2 tablespoons of ${sugar}`
step4 = `4. Add ${milk}`
step5 = `Well, ${result} Enjoy!`

console.log(recipe + '\n' + step1 + '\n' + step2 + '\n' + step3 + '\n' + step4 + '\n' + step5)

// Review 1 homework from Tatiana Volk
// 
// Задача 1 Напишите формулу, которая вычисляет BMI (Body Mass Index), 
// BMI = вес (кг)/ рост (м) в квадрате. Напечатайте результат в консоли. Выведите вместе сo своим именем на страницу

let myName = 'Dima'
let weight = 65
let height = 1.73

bmi = weight / (height ** 2)

console.log(myName, bmi)

// Задача 2. Создайте две переменные с любыми значениями. Напишите программу, которая поменяет эти значения местами

// 1 способ

x = 9
y = 6

y = [x, x = y][0]

console.log('x =', x, 'y =', y)

// 2 способ

x = 9
y = 6

temp = x
x = y
y = temp

console.log('x =', x, 'y =', y)

// 3 способ

x = 9
y = 6

x = x + y
y = x - y
x = x - y

console.log('x =', x, 'y =', y)