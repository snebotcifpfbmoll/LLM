var arr = [];
for (var i = 0; i < 36000; i ++) {
    var num_1 = parseInt(Math.random() * 10 % 6 + 1)
    var num_2 = parseInt(Math.random() * 10 % 6 + 1)
    arr.push(num_1 + num_2);
}
console.log(arr);
