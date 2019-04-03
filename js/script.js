console.log('Задание 1');
var arr = [],
    num = 2;
while (num <= 100) {
    var numCheck = 1;
    for (let i = 0; i < arr.length; i++) {
        if (num % arr[i] === 0) {
            numCheck = 0;
        }
    }
    if (numCheck === 1) {
        arr.push(num);
    }
    num++;
}

console.log(arr);

console.log('Задание 2 и 3');

var items = ['майка', 'джинсы', 'куртка'];
var price = [100, 250, 320];

var countBasketPrice = function () {
    let itemPrice = 0;
    for (let i = 0; i < price.length; i++) {
        itemPrice += price[i];
    }
    return itemPrice;
};

console.log('общая цена = ' + countBasketPrice());

console.log('Задание 4');

for (let i = 0; i <= 9; i++, console.log(i - 1)) {};

console.log('задание 5');

var abb = '\nx';

for (let i = 0; i < 20; i++) {
    console.log (abb);
    abb = abb + 'x';
}