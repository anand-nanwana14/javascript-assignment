// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
    if (array.length < 2) {
        return "Array should have at least two elements";
    }
    let Largest = Math.max(array[0], array[1]);
    let secondLargest = Math.min(array[0], array[1]);

    for (let i = 2; i < array.length; i++) {
        if (array[i] > Largest) {
            secondLargest = Largest;
            Largest = array[i];
        } else if (array[i] > secondLargest && array[i] !== Largest) {
            secondLargest = array[i];
        }
    }

    return secondLargest;
}

const hello = [1, 4, 3, 6, 3, 7, 9]
const print = secondLargest(hello)
console.log(print)