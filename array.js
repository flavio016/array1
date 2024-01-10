function findDuplicates(array1, array2) {//krijimi i nje funksioni me 2 argumenta

    let uniqueValues = new Set(array1);//brenda funksionit krijojm nje objekt per array per tu ruajtur vlerat unike 

 
    let duplicates = [];

 
    for (let value of array2) {
        
        if (uniqueValues.has(value)) {
            duplicates.push(value);
        }
    }

    return duplicates;
}


let array1 = [1, 2, 3];
let array2 = [2, 3, 4];

let duplicateValues = findDuplicates(array1, array2);
console.log(duplicateValues);
