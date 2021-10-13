const checkSize = function(number){
    if (number > 100){
        return true;
    };
    return false;
};
console.log(checkSize(100));
console.log(checkSize(120));
console.log(checkSize(80));

const brendaBot = function(max, current, age){
    if (current < max){
        if (age >= 18){
            return 'come in';
        } else {
            return 'this is a club for adults';
        };
    } else {
        return "it's to busy now, come back later";
    };
};
console.log(brendaBot(100, 100, 20));
console.log(brendaBot(100, 80, 20));
console.log(brendaBot(100, 80, 15));

const calcAvg = function(numbers){
    let totalAmount = 0;
    for (let i = 0; i < numbers.length; i++) {
        totalAmount = totalAmount + numbers[i];
    };
    return Math.round(totalAmount / numbers.length);
};
let numbers = [10, 120, 100, 5, 10];
console.log(calcAvg(numbers));
