/***
 * 
 * Here I'm gonna take an array and split that into some small chunks.
 * 
 * I hope, this may help you.
 * 
 */

//taking array for spliting
const testArray = [];

for (let j = 0; j < 50; j++) {
    testArray.push(j + 1);
}

//main function
const makeArrayToChunk = (mainArray) => {
    let chunkedArray = [], tempArray = [], tempObj = {}, counter = 0;

    for (let i = 0; i < mainArray.length; i++) {

        if (i !== 0 && i % 5 === 0) {
            tempArray.push(mainArray[i]);
            tempObj[counter.toString()] = tempArray;

            if (Object.keys(tempObj).length !== 0) {
                chunkedArray.push(tempObj);

            }

            tempArray = [];
            tempObj = {};
            counter = counter + 1;

        } else {
            tempArray.push(mainArray[i]);
            tempObj[counter.toString()] = tempArray;

        }

        if (i === (mainArray.length - 1)) {
            if (Object.keys(tempObj).length !== 0) {
                chunkedArray.push(tempObj);

            }
        }

    }

    return chunkedArray;
}


// result
let result = makeArrayToChunk(testArray);
console.log(result);


// expected result
/*

[
  { '0': [ 1, 2, 3, 4, 5, 6 ] },
  { '1': [ 7, 8, 9, 10, 11 ] },
  { '2': [ 12, 13, 14, 15, 16 ] },
  { '3': [ 17, 18, 19, 20, 21 ] },
  { '4': [ 22, 23, 24, 25, 26 ] },
  { '5': [ 27, 28, 29, 30, 31 ] },
  { '6': [ 32, 33, 34, 35, 36 ] },
  { '7': [ 37, 38, 39, 40, 41 ] },
  { '8': [ 42, 43, 44, 45, 46 ] },
  { '9': [ 47, 48, 49, 50 ] }
]


*/