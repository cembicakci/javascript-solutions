//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
    const arr = x.split('');

    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        
        const trim = arr[i].trim();
        newArr.push(trim);
    }

    return newArr.join('')
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))