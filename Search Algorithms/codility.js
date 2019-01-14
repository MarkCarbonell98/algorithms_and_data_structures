// function solution(N) {
//     let number = N.toString(2);
//     let maxs = [];
//     let temp = 0, max = 0;
//     for(let i = 0; i < number.length; i++) {
//         if(number[i] === '0') {
//             max++;
//         } else {
//             temp = max;
//             maxs.push(temp);
//             max = 0;
//         }
//     }
//     return (Math.max(...maxs) || 0);
// }

function solution(N) {
    let number = N.toString(2);
    let temp = 0, max = 0;
    for(let i = 0; i < number.length; i++) {
        if(number[i] === '0') {
            max++;
        } else {
            temp = max;
            max = 0;
        }
    }
    return Math.max(temp,max) || 0;
}

console.log(solution(2000000000));