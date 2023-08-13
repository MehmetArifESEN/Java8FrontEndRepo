//yanlış array kullanımı
["Kerem","Turak",1995];
const kerem ={
    name: "Kerem",
    surname: "Turak",
    date: 1995,
};


//doğru kullanım
let sinif = ["Kerem","Hivda","Merve","Uğur","Mustafa"];
console.log(sinif[3]);
sinif[4] = "Mehmet";
console.log(sinif[4]);
sinif[5] = "Nurgül";
console.log(sinif);

sinif.push("Damla");
sinif.push("Afife");
console.log(sinif);
sinif.pop();
console.log(sinif);

const yeniSinif= sinif.slice(1,4);
console.log(yeniSinif);

// Array'ın  berlirlenen index'ten sonra girilen sayı kadar elemanını çıkartır.
// Sonrasında yeni elemanlar eklenebilşr.
sinif.splice(1,2,"Ayse","Yasin","Ahmet");
console.log(sinif);

// Array'in bir elemanının index'ini bulmak için kullanılır.
const indexOfAhmet= sinif.indexOf("Ahmet");
console.log(indexOfAhmet);

// Array'in içerisinde aranılan elemanın olup olmadığını boolean olarak döner.
console.log(sinif.includes("Nurgül"));

if(sinif.includes("Nurgül")) {
    sinif[sinif.indexOf("Nurgül")]="Sinem";
    console.log(sinif);
}

sinif.shift();
console.log(sinif);

sinif.unshift("Cem","Afife","Betul");
console.log(sinif);

sinif.reverse();
console.log(sinif);

const yeniKisiler = ["Kerem", "Hivda"];
const newSinif = sinif.concat(yeniKisiler);
console.log("newSinif",newSinif);
console.log("sinif",sinif);

const print = `Sinifimda ${newSinif.join(", ")} kişileri var.`