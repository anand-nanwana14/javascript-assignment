// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
    const frequency = {};

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        // Ignore non-alphabetic characters
        if (/^[a-zA-Z]$/.test(char)) {
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }

    return frequency;
}

const inputString = 'hello @@ world';
const frequencies = calculateFrequency(inputString);
console.log(frequencies);