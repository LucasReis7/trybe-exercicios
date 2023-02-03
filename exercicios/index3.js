let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallest = array[0];

for (let index = 0; index < array.length; index++) {
    if (array[index].length > biggestWord.length) {
        biggestWord = array[index];
    }
    
}

for (let index = 0; index < array.length; index++) {
    if (array[index].length < smallest.length) {
        smallest = array[index];
    }
    
}
console.log(biggestWord);
console.log(smallest);