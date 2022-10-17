'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
    const s_array = s.split('')
    const characters = s_array.filter((i, j) => s_array.indexOf(i) === j) /* indexOf returns the first index at which a given element can be found in the array */
   
    const pairs = []
    for (let i = 0; i < characters.length; i++)
        for (let j = i + 1; j < characters.length; j++)
            pairs.push([characters[i], characters[j]])

    let max_length = 0 
    for (let index = 0; index < pairs.length; index++) {
        const pair = pairs[index];
        let aux = s_array.filter((a) => (a == pair[0] || a == pair[1]))
        
        let length = aux.length
        for (let j = 0; j < aux.length; j++) 
            if(aux[j] == aux[j + 1]){
                length = -1
                break
            }
        if(max_length < length) max_length = length
    }
    return max_length
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}