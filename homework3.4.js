//1
'use strict';
function range(beginingOfDiapazon, endOfDiapazon, step) {
    let arr = [];
    if (step == undefined) {
        step = 1;
    }if (step >= 1) {
        for (let i = beginingOfDiapazon; i <= endOfDiapazon; i += step) {
            arr.push(i);
        }
    } else {
        for (let i = beginingOfDiapazon; i >= endOfDiapazon; i += step) {
            arr.push(i);
        }
    }
    return arr;
} console.log(range(1, 10));

//2
'use strict';
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
} console.log(sum([4,5,7,8,9,0,6]));

//3
'use strict';
