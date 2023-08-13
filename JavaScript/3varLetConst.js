var variableType= "var";
let letType = "let";
const CONST_TYPE = "const";

function varLetDifference() {
    // hoisting ile a değişkeninin function içerisinde tanımlamıs olduk
    console.log(a);
   // console.log(b);
    if(true) {
        // global variable
        var a="a";
        // local variable
        let b="b";
        console.log("if içinde a: ", a);
        console.log("if içinde b: ", b);
    }
    console.log("if dısında a: ",a);
    console.log("if disinda b: ", typeof b);
}
varLetDifference();

console.log("func dısında a: ",typeof a);
console.log("func dısında b: ",typeof b);