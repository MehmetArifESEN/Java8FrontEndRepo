// 1- myArray isimli bir dizi tanımlayın. 10 elemandan oluşsun ad soyad yaş true sevdiğiniz meyveler, sevdiğiniz yemekler
// 2- adınızı değiştirin => Cem => Mert. Diziyi konsola yazdırın.
// 3- dizinin uzunluğunu konsola yazdırın.
// 4- dizinin sonuna bir hayvan ismi ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
// 5- dizinin başına bir hayvan ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
// 6- dizinin sonundaki elemanı silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
// 7- dizinin ilk elemanını silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
// 8- silmiş olduğunuz elemanları ve uzunluk bilgilerini newArray isimli yeni bir dizide toplayın.(sakladığınız değişkenleri kullanın)
// 9- myArray ve newArray dizilerini birleştirin ve yeni değişkenlere atayın. 2 yöntem.
// 10- myArray içerisinde eleman olarak "Veli" var mı ?
// 11- myArray içersinide 4.elemandan itibaren patates var mı?
// 12- sevdiğiniz meyvelerden ilkinin indexi nedir?
// 13- newArray dizisinin ilk 3 elemanını bir değişkene atayın, konsola yazdırın.
// 14- son oluşturduğunuz 3 elemanlı dizinin 2. elemanını silip yerine 2 farklı eleman ekleyin.
// 15- son diziniz 4 elemanlı olmuş olmalı. tek metot ile 1 eleman silin 1 eleman değiştirin ve bir eleman ekleyin
// 16- son dizinizin elemanlarını aralarına "+" koyarak bir stringe çevirin ve konsola yazdırın.


let myArray= ["Mehmet","Esen",27,true,"Şeftali","Armut","Karpuz","Mantı","Makarna","Yağlama"];

// 1
// 2
myArray[myArray.indexOf("Mehmet")] = "Mert";
console.log(myArray);
// 3
console.log(myArray.length);
// 4
myArray.push("Kuş");
const uzunluk=myArray.indexOf("Kuş") +1;
console.log(uzunluk);
// 5
myArray.unshift("Karga");
const baslangic=myArray.indexOf("Kuş") +1;
console.log(myArray);
console.log(baslangic);
// 6
const eleman=myArray.pop();
console.log(myArray);
console.log(eleman);
// 7
const elemanilk=myArray.shift();
console.log(myArray);
console.log(elemanilk);
// 8
const newArray=[uzunluk,baslangic,eleman,elemanilk]
console.log(newArray);
// 9
const yeniArray=myArray.concat(newArray);
console.log(yeniArray);
const yeniArray2=myArray;
for(let i=0;i<newArray.length;i++){
    yeniArray2.push(newArray[i]);
}
console.log(yeniArray2);
// 10
let status1 = false;
for(let i=0;i<myArray.length;i++){
    if(myArray[i]=="Veli") {
        status1=true;
    }
        
}
if(status1==true){
    console.log("Veli mevcut")
} else {
    console.log("Veli mevcut değil")
}
// 11
let status2 = false;
for(let i=3;i<myArray.length;i++){
    if(myArray[i]=="patates") {
        status2=true;
    }
        
}
if(status2==true){
    console.log("patates mevcut")
} else {
    console.log("patates mevcut değil")
}
