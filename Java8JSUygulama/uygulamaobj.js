
// 1- myObject isimli boş bir nesne oluşturun.

// 2- nesnenin içerisine isim, yas, cinsiyet ve meslek özelliklerini sırasıyla ekleyin

// 3- nesnenin içerisinden cinsiyet özelliğini kaldırın.

// 4- myObject nesnesinin özelliklerini bir başka değişkene kopyalayın.

// 5- nesnenizin anahtarlarını konsola yazdırın.

// 6- nesnenizin değerlerini konsola yazdırın.

// 7- nesnenizin tüm anahtar-değer çiftlerini konsola yazdırın.

// 8- nesnenizin içerisinde isim anahtarına sahip bir özellik var mı diye kontrol edin

// 9- nesnenizin özelliklerine değişiklik ve ekleme çıkarma yapılabilmesini engelleyin.

// 10- nesnenizin özelliklerinde değişiklik yapılabilsin ancak ekleme çıkarma yapılabilmesini engelleyin.

const myObject= {
    isim: "Mehmet",
    yas: "27",
    cinsiyet: "Erkek",
    meslek: "Yazilimci"
};

console.log(myObject);
delete myObject.cinsiyet;

console.log(Object.keys(myObject));

for (const value of Object.values(myObject)) {
    console.log(value);
}

for( [key,value] of  Object.entries(myObject)) {
    console.log(`${key}: ${value}`);
}

if(myObject.hasOwnProperty("yas")) {
    
}

