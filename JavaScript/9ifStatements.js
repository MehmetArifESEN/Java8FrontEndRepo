const a = 3+4;
const b = 7;
const c= "7";

//Nested if yapısı 
if(a==c) {
    // a, c ye eşit
    if(c==b) {
     //   c, b ve a değerine eşittir.
     console.log("a, b ve c değerleri birbirlerine eşittir.");
    } else {
        // a, c ye eşit
        console.log("a ve c değerleri birbirlerine eşittir.");
    }
} else if(a===b) {
    // a , c' ye eşit değildir
    console.log("a ve b değerleri birbirlerine eşittir.");
   
} else {
    // a, c' ye eşit değildir.
    console.log("a değeri b ve c ye eşit değildir.");
}

if(a==c && c == b) {
    console.log("a , b ve c değerleri birbirlerine eşittir.");
} else if (a==C || c==b) {
    console.log("c deperi a veya b değerine eşittir.");
} else if (a==c) {
    console.log("a ve c  değerleri eşittir.");
} else if (c!= a && c!= b) {
    console.log("c deperi hem a hem b ye esıt degıldır.");
} else if ( a===b) {
    console.log("a ve b birbirlerine eşittir");
} else {
    console.log("a deperi b veya c ye esıt degıldır.");
}