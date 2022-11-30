// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let arr = str.split('')
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'a') {
            count++;

        } else if (arr[i] === 'e') {
            count++;

        } else if (arr[i] === 'e') {
            count++;

        } else if (arr[i] === 'i') {
            count++;

        } else if (arr[i] === 'o') {
            count++;

        } else if (arr[i] === 'u') {
            count++; 

        }
    }

    return count;


}

console.log(getCount('deneme'))