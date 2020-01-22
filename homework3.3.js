//1
'use strict';
function sumOfOddNumbers(number) {
    let sum = 0;
    while (number > 0) {
        let newNumber = number % 10;
        if (newNumber % 2 == 1) {
            sum += newNumber;
        }
        number = (number - newNumber)/10;
    }
    return sum;
}
alert(sumOfOddNumbers(3456));

//2
'use strict';
function maxEvenNumber(number) {
    let allEvenNumbers = [];
    while (number > 0) {
        newNumber = number % 10;
        if (newNumber % 2 == 0) {
            allEvenNumbers.push(newNumber);
        }
        number = (number - newNumber)/10;
    } 
    let maxEven = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (allEvenNumbers[i] > maxEven) {
            maxEven = allEvenNumbers[i];
        }
    } return maxEven;
}  console.log(maxEvenNumber(340239));

//3
'use strict';
function lastOddNumber(number) {
    let allOddNumbers = [];
    while (number > 0) {
        newNumber = number % 10;
        if (newNumber % 2 == 1) {
            allOddNumbers.push(newNumber);
        }
        number = (number - newNumber)/10;
    }
    let result = allOddNumbers[0];
    return result;
} 
console.log(lastOddNumber(57865324));

//4
'use strict';
function maxOfTheThreeNumbers(number1, number2, number3) {
    let max = number1;
    if (number2 > max) {
        max = number2;
    }
    if (number3 > max) {
        max = number3;
    }
    return max;
} 
alert(maxOfTheThreeNumbers(10, 45, 12));

//5
'use strict';
function minOfFiveNumbers(num1, num2, num3, num4, num5) {
    let min = num1;
    if (num2 < min) {
        min = num2;
    }
    if (num3 < min) {
        min = num3;
    }
    if (num4 < min) {
        min = num4;
    }
    if (num5 < min) {
        min = num5;
    }
    return min;
} alert (minOfFiveNumbers(12, 78, 56, 34, 7));

//6
'use strict';
function getType(param) {
    return typeof(param);
}
 console.log(getType(12));
 console.log(getType(true));
 console.log(getType('Hello, world'));

 //7
 'use strict';
 function daysOfWeek(number) {
    switch (number) {
        case 1:
            alert('Понедельник');
            break;
        case 2:
            alert('Вторник');
            break;
        case 3:
            alert('Среда');
            break;
        case 4:
            alert('Четверг');
            break;
        case 5:
            alert('Пятница');
            break;
        case 6:
            alert('Суббота');
            break;
        case 7:
            alert('Воскресенье');
            break;

        default:
            alert('Вы ввели неправильный номер. Перезагрузите страницу и повторите попытку)');
            break;
    }
    return;
 } alert(daysOfWeek(6));