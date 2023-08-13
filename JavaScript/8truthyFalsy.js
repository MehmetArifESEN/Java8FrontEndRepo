// truthy
true;
5;
("string");
const obj = {name: "Uğur Gürkan",surname: "Yağmur"};

if(obj?.name) {
    console.log("obj bir truthy değerdir.");
    console.log(obj.name);
}

//falsy
false;
0;

if(0) {
    console.log("0 bir truthy değerdir.");
}

if(!!obj) {
    console.log("girdi");
}
console.log(!!obj);