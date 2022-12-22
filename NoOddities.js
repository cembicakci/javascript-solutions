// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

function noOdds(values) {

    let array = []
    values.forEach((value) => {
        value % 2 === 0 ? array.push(value) : ''
    })

    return array
}

console.log(noOdds([0, 1, 2, 3]))