function wavePrint(arr) {
    const ans = [];
    
    for (let count = 0; count < arr[0].length; count++) {
        if (count % 2 === 0) {
            for (let i = 0; i < arr.length; i++) {
                ans.push(arr[i][count]);
            }
        } else {
            for (let i = arr.length - 1; i >= 0; i--) {
                ans.push(arr[i][count]);
            }
        }
    }
    
    return ans;
}

// Example usage
const inputArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const result = wavePrint(inputArray);
console.log(result.join(" "));
