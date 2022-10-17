/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    const result = [0,0]
    for (let index = 0; index < a.length; index++) {
        if(a[index] > b[index])
            result[0] += 1
        else if(b[index] > a[index])
            result[1] += 1
    }
    return result
}

function main() {
    console.log(compareTriplets([5,6,7],[3,6,10]))
}
main()