const mainArray = [];

for (let j = 0; j < 100; j++) {
    mainArray.push(j + 1);
}

let chunkedArray = [];
let tempArray = [];
let tempObj = {};

let counter = 0;
let indexCounter = 0;

for (let i = 0; i < mainArray.length; i++) {

    if (i !== 0 && i % 5 === 0) {
        tempArray.push(mainArray[i]);

        tempObj[counter.toString()] = tempArray;

        chunkedArray.push(tempObj)

        tempArray = [];
        tempObj = {};

        counter = counter + 1;

    } else {
        tempArray.push(mainArray[i]);

        tempObj[counter.toString()] = tempArray;

    }

    if (i === (mainArray.length - 1)) {
        chunkedArray.push(tempObj);
    }

}

console.log(counter);
console.log(chunkedArray);