// Выведите следующий диалог, используя только одну инструкцию console.log(), кавычки и спецсимволы

console.log(
  'Да?\nАлё!\nДа да?\nНу как там с "деньгами"?\nА?\nКак с "деньгами"-то там?\nЧё с "деньгами"?\nЧё?'
);

// Перед вами программа, которая выводит информацию о личности в определенном формате, взяв ее из объекта, свойства которого вводятся пользователем.
// Вместо многоточия вставьте интерполированную строку правильным образом.

const person = {};
person.name = prompt();
person.age = Number(prompt());
const info = `Имя: ${person.name}, Возраст: ${person.age} лет`;
console.log(info);

// Создайте объект budget со свойствами income (доход) и expenses (расходы), значения которых вводятся пользователем и методом calculateProfit,
// который высчитывает прибыль по следующей формуле:
// - Прибыль = доход - расходы
// Если прибыль положительная, программа выводит значение прибыли. Если прибыль равна нулю, программа выводит сообщение о том, что пользователь отработал в ноль.
// Если прибыль отрицательна, программа выводит насколько пользователь ушел в минус.
// Используйте интерполяцию.

let budget = {
  income: prompt(),
  expenses: prompt(),
  calculateProfit() {
    return this.total > 0
      ? `Ваша прибыль составляет ${this.total} рублей`
      : this.total == 0
      ? `Вы отработали в ноль`
      : `Вы ушли в минус на ${Math.abs(this.total)} рублей`;
  },
};
budget.total = budget.income - budget.expenses;

console.log(budget.calculateProfit());

// Перед вами программа, которая принимает название товара, цену товара за штуку и количество товара и выводит сообщение в определенном формате
// с помощью функции calculateTotal с тремя параметрами. Напишите функцию calculateTotal. Используйте интерполяцию.

const itemName = prompt();
const itemPrice = Number(prompt());
const quantity = Number(prompt());

let calculateTotal = (itemName, itemPrice, quantity) =>
  `Вы выбрали ${quantity} товаров "${itemName}" по цене ${itemPrice} рублей за штуку. Итого: ${
    quantity * itemPrice
  } рублей.`;

const message = calculateTotal(itemName, itemPrice, quantity);
console.log(message);

// Перед вами та же программа, но теперь формат вывода сообщения изменен.
// Напишите функцию с одной инструкцией console.log(), в которой должны быть использованы спецсимволы.

const itemName = prompt();
const itemPrice = Number(prompt());
const quantity = Number(prompt());

let calculateTotal = (itemName, itemPrice, quantity) =>
  `Вы выбрали "${itemName}" по цене ${itemPrice} рублей за штуку.\nКоличество: ${quantity} шт.\nИтого: ${
    quantity * itemPrice
  } рублей.`;

const message = calculateTotal(itemName, itemPrice, quantity);
console.log(message);
