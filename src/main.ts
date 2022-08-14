let a: number = 0;
let b: number = 1;
let nextTerm: number;
let sum = 0;
for (let i = 1; i < 20; i++) {
    console.log(a);
    nextTerm = a + b;
    a = b;
    b = nextTerm;
    sum += a;
}
console.log("tong cac so fibonacci la " + sum)

