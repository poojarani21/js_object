// Output : {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
var y = require("readline-sync");
var x = y.questionInt("enter any number: ")
var i = 0;
var obj = {}
while (i < x){
    obj[i]=i*i
    i++
}

console.log(obj)
