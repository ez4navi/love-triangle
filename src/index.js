/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var numbers = [],index = [], counter = 0, triangleCounter = 0;
    for (let i=0; i<preferences.length; i++) {
        var temp=i;
        while(counter<3) {
            if (preferences[temp]===temp+1) break;
            numbers.push(preferences[temp]);
            index.push(temp+1);
            temp=preferences[temp]-1;
            counter++;
            numbers.sort();
            index.sort();
        }
        let check = 0;
        for (let j=0; j<numbers.length; j++) {
            if (numbers[j]===index[j]) check++;
        }
        if (check===3) triangleCounter++;
        numbers = [];
        index = [];
        counter = 0;
        check = 0;
    }
    return triangleCounter/3;
};
