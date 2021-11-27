/***
 * 
 * Here I'm gonna take an array and split that into some small chunks.
 * 
 * I hope, this may help you.
 * 
 */

//taking array for spliting
const testArray = [];

for (let j = 0; j < 100; j++) {
    testArray.push(j + 1);
}

//main function
const makeArrayToChunk = (mainArray) => {
    let chunkedArray = [], tempArray = [], tempObj = {}, counter = 0;

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

    return chunkedArray;
}


// result
let result = makeArrayToChunk(testArray);
console.log(result);