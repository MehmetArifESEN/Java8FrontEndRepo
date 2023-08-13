let loremIpsum = "Lorem ipsum dolor sit amet, usu dicat vivendo tibique ad, cum ";

console.log("length: ",loremIpsum.length);

//slice
const sliceString = loremIpsum.slice(6,11);
console.log("slice:" ,sliceString);

// substring
const substring1 = loremIpsum.substring(6,11);
const substring2 = loremIpsum.substring(6);
console.log("substring:" ,substring1);
console.log("substring:" ,substring2);

//substr
const substrUsage=loremIpsum.substr(6,5);
console.log(substrUsage);

// uppercase
const toUpperCaseString= loremIpsum.toUpperCase();
console.log("uppercase:" , toUpperCaseString);

//lowercase
const toLowerCaseString= loremIpsum.toLowerCase();
console.log("lowercase:" , toLowerCaseString);

// includes
if(loremIpsum.toLowerCase().includes("amet")) {
    console.log("amet kelımesi loremIpsum variable'ında mevcut.");
}

if(loremIpsum.toLowerCase().includes("lorem")) {
    console.log("lorem kelımesi loremIpsum variable'ında mevcut.");
}

const loremIpsumWithWhiteSpace= "     Lorem ipsum      ";
console.log("trim:", loremIpsumWithWhiteSpace.trim());


const trimStartUsage=loremIpsumWithWhiteSpace.trimStart();
console.log("trimStart:", trimStartUsage);

const trimEndUsage=loremIpsumWithWhiteSpace.trimEnd();
console.log("trimEnd:", trimEndUsage);

const replaceUsage = "I am using Twitter";
console.log("replace:" ,replaceUsage.replace("Twitter","Threads"));

const splitUsage = "I am using Threads";
console.log("split:",splitUsage.split(" "));

const ids= "id1,id2,id3";
console.log("split",ids.split(","));

const indexOfUsage = "Lorem ipsum dolor sit ipsum amet";
console.log("indexof:", indexOfUsage.indexOf("ipsum"));
console.log("lastIndexOf:" , indexOfUsage.lastIndexOf("ipsum"));
console.log("indexof e:", indexOfUsage.indexOf("e"));
console.log("lastIndexOf e:", indexOfUsage.lastIndexOf("e",10));
console.log("indexof e:", indexOfUsage.indexOf("e",10));

//String template Literal
let stringTemplateLiteral=`Split: ${splitUsage}, Ids: ${ids}`;
//concat
stringTemplateLiteral= "Split: ".concat(splitUsage).concat(", Ids: ").concat(ids);
console.log(stringTemplateLiteral);

