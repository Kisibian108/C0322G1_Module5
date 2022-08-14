var a = 0;
var b = 1;
var nextTerm;
var sum = 0;
for (var i = 1; i < 20; i++) {
    console.log(a);
    nextTerm = a + b;
    a = b;
    b = nextTerm;
    sum += a;
}
console.log("tong cac so fibonacci la " + sum);
