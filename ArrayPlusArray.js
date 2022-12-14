// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    let totalArr1 = 0;
    for (let i = 0; i <= arr1.length - 1; i++) {
        totalArr1 += arr1[i]
    }

    let totalArr2 = 0;
    for (let i = 0; i <= arr2.length - 1; i++) {
        totalArr2 += arr2[i]
    }

    return totalArr1 + totalArr2;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))