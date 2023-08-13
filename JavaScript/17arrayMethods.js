const sinif=["Ayşe","Yasin","Sinem","Damla","Mehmet"];

const numbers= [49,55,7,23,17,66,13,98,6];

// --FOREACH
// foreach methodu içerideki elementlerı göstermek istediğinizde veya 
// o elementleri bir işlem dahilinde kullanmak istediğimizde kullanırız.

sinif.forEach((element,index,arr) => {
  //  console.log(index===0 ? "ilk element" : arr[index]);
   // console.log(`${element} sinifin ${index} indexli öğrencisidir`);
});

sinif.forEach((element) => {
 //   console.log(element);
});

// --MAP
// var oan array'in elemanları üzerinde yaptığımız değişikliklerle yeni bir array yaratmamızı sağlar.
//const yeniSinif= sinif.map((element,index,arr)=>{
//    return `${element} sinifin bir elemanıdır.`
//});
//console.log(yeniSinif);

const yeniSinif = sinif.map((element,index,arr)=> {
    return `${element} sinifin bir elemanıdır.`
});
// FİLTER
//var olan array'in istenilen kriterlere göre filtrelenip yeni bir array yaratılmasını sağlar.
const filteredSinif = sinif.filter((element,index,arr)=>{
    return element.length > 5;
});

console.log(filteredSinif);

//const filteredNumber =  numbers.filter((element) =>{
//    return element > 50;
//});
const filteredNumber = numbers.filter((element) => element > 50);
console.log(filteredNumber);

// --EVERY
// every methodu belırlenen kural tüm elementler için doğruysa ttrue doner.
// Bir element dahil geçerli değilse false döner.
const everyNumbers1 =  numbers.every((element) => element > 0);
// console.log(everyNumbers1);
const everyNumbers2 = numbers.every((element)=> element>1);
//console.log(everyNumbers2)

// --SOME 
const someNumbers1= numbers.some((element)=>{
    const isTrue = element > 50;
    return isTrue;
});
//console.log(someNumbers1);

const someNumbers2= numbers.some((element)=>{
    const isTrue = element > 300;
    return isTrue;
});
//console.log(someNumbers2);

// --FIND
// find methodu arrayde belırlenen kosulu saglayan ılk elemanı verir

const higherThan50 = numbers.find((element)=> element > 50);
//console.log(higherThan50);

// --FINDLAST
// findLast Methodu'u array içinde belirlenen koşulu sağlayan en son elemanı verir.
const higherThan50ForLast = numbers.findLast((element)=> {
    const isTrue = element > 50;
    return isTrue;
});
// console.log(higherThan50ForLast);

// --FINDINDEX
// koşulu sağlayan ilk elemanın indexinin verir.
//number array'i içerisinde 50 den büyük olan ilk elemanın indexi nedir?
const higherThan50Index= numbers.findIndex(element=>element>50);
//console.log(higherThan50Index);

// --FINDLASTINDEX
const higherThan50ForLastIndex=numbers.findLastIndex(element=>{
    (element) => element >150
});
//console.log(higherThan50ForLastIndex);

//  --SORT
// sort methodu verilen arrayin belirlenen koşul ile sıralanmasını saglar
//ilgiki array'i  değiştirerek sıralanmıs halını verir
//numbers.sort((a,b)=>{
//    const val = a-b;
//    return val;
//});
//console.log("numbers",numbers);

//console.log ("sinifBaslangic" , sinif);
//sinif.sort();
//console.log("sinif", sinif);
//sinif.forEach((element) => console.log(element));

// --REVERSE
console.log(numbers);
numbers.reverse();
console.log(numbers);
console.log(sinif);
sinif.reverse();
console.log(sinif);

// --REDUCE

const totalNumbers=numbers.reduce((total,element)=> {
    return total + element;
});

//console.log(totalNumbers);

const siniftakiKisiler = sinif.reduce((kisiler,element) => {
    return `${kisiler},${element}`;
});
//console.log(siniftakiKisiler);

const carpim=numbers.reduce((total,element)=> {
    return total * element;
});
console.log(carpim);