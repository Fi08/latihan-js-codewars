// ---------cara normal-------  
// function reverseList(list) {
//    return list.reverse();
// }


// ----------Gaya arrow function---------
let reverseList = list => list.reverse();


// -------- Algoritma --------
// function reverseList(input) {
//    var ret = [];
//    for (var i = input.length - 1; i >= 0; i--) {
//       ret.push(input[i]);
//    }
//    return ret;
// }

console.log(reverseList([1, 2, 3, 4]), [4, 3, 2, 1])
console.log(reverseList([5, 4, 3, 1]))