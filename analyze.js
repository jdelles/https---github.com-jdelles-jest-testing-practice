function analyzeArray(array) {
    const arrayInfo = {
        average: array[0],
        min: array[0],
        max: array[0],
        length: 1,
    };
    for (let i = 1; i < array.length; i++) {
        arrayInfo.average += array[i];
        arrayInfo.length++;
        if (array[i] > arrayInfo.max) {
            arrayInfo.max = array[i];
        }
        if (array[i] < arrayInfo.min) {
            arrayInfo.min = array[i];
        }
    }
    arrayInfo.average /= arrayInfo.length;
    return arrayInfo;
}

module.exports = analyzeArray;
