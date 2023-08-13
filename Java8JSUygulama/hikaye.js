let hikayeMetin="Merhaba ismim Mehmet.Yaşım 26.Java kodu yazıyorum.Java öğreniyorum.Herkese merhaba.Mehmet başarılar diler."

console.log("hikaye uzunlugu:" , hikayeMetin.length);

console.log("toplam index:", hikayeMetin.indexOf(''));

console.log("indexof:", hikayeMetin.indexOf("Mehmet"));
console.log("lastIndexOf:" , hikayeMetin.lastIndexOf("Mehmet"));

console.log("ilk 15:" , hikayeMetin.slice(0,15));
console.log("ilk 15:" , hikayeMetin.substring(0,15));

console.log("Sonra 15:" , hikayeMetin.substring(15));
console.log("Sonra 15:" , hikayeMetin.slice(15,106));

console.log("Son 5:" , hikayeMetin.substring(101));
console.log("Son 5:" , hikayeMetin.slice(101,106));

console.log("11 den sonra:" , hikayeMetin.substr(11,10));

console.log("son 5 haric:" , hikayeMetin.substring(0,101));
console.log("son 5 haric:" , hikayeMetin.substring(0,hikayeMetin.length-5));

if(hikayeMetin.includes("başarılar")) {
    console.log("başarılar kelimesi mevcut");
}

console.log("replace:" ,hikayeMetin.replaceAll("i","ı"));
console.log("replace:" ,hikayeMetin.replace("a","e"));

console.log("uppercase:" , hikayeMetin.toUpperCase());

console.log("lowercase:" , hikayeMetin.toLowerCase());