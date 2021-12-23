/**
 * 
 * arrayV Create a function which counts how many lone 1s appear in a given number. Lone means the number doesn't appear twice or more in a row.

Examples:
countLoneOnes(101) ➞ 2

countLoneOnes(1191) ➞ 1

countLoneOnes(1111) ➞ 0

countLoneOnes(462) ➞ 0

Notes:
Tests will include positive whole numbers only.


 * @returns 
 */

let loneCount = (Q) => {
    let count = 0; //count of number of boomerangs

    let arrayV = [];
    let sNumber = Q.toString();
    for (let j = 0; j < sNumber.length; j++) {
        arrayV.push(+sNumber.charAt(j));
    }
    for (let i = 0; i < arrayV.length; i++) {
        //console.log('arrayV-' + i + ' = ' + arrayV[i]);
        //console.log('arrayV-' + (i + 1) + ' = ' + arrayV[i + 1]);
        if (arrayV[i] !== arrayV[i + 1] && arrayV[i] === 1 && arrayV[i] !== arrayV[i - 1]) {
            count++;
        }
    }
    return (count + ' lone 1s');
};
console.log(loneCount(101));
console.log(loneCount(1191));
console.log(loneCount(1111));
console.log(loneCount(462));
console.log(loneCount(14612));