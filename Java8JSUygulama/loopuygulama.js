
// kullanıcıdan bir başlangıç sayısı bir de bitiş sayısı isteyin. Bir for döngüsü yaratarak başlangıç sayısından bitiş sayısına kadar bütün sayıları toplayın. 
//toplamı ekrana yazdırın (başlangıç ve bitiş sayısı dahil)

 

// -------------------For Geçen Öğrenci Sayısı-----------------------

// Bir sınıfta 5 öğrenci olduğunu düşünelim. Öğrencilerin notlarını almak için prompt kullanarak her öğrenci için bir not girişi yapın.
// Ardından, bu notları kullanarak sınıf ortalamasını hesaplayın. Son olarak, sınıftaki öğrencilerin kaç tanesinin geçtiğini (geçer not 60) bulun ve konsola yazdırın.

// -------------------While Sayı Tahmin uygulaması-----------------------

// Random bir sayı tanımlayın ve kullanıcıdan 1-10 arası bir sayı girerek sayıyı tahmin etmesini isteyin. 
//Toplam 3 hak tanımlayın. While döngüsü kullanarak, kullanıcının hakları bitene kadar denemesine izin verin. Her denemenin sonunda sayıyı arttırıp azaltması gerektiği
// bilgisini ekrana yazdırın.

/* var baslangic = prompt("lutfen baslangic sayisini giriniz");

var bitis = prompt("lütfen bitis sayısını gırınız");

baslangic=parseInt(baslangic);

bitis = parseInt(bitis);

var toplam=0;

 if(bitis>baslangic){
    var i=baslangic
    for(i;i<=bitis;i++) {
        toplam= toplam+i;
    }
    console.log(toplam);
} else if (bitis<baslangic){
    var i=bitis
        for(i;i<=baslangic;i++) {
            toplam= toplam+i;
        }
        console.log(toplam);
} else{
    toplam= baslangic +bitis;
    console.log(toplam);
}
 */
// for gecen ogrencı
/*
let ogrenciNotu= prompt("Lütfen öğrenci notunu giriniz")
let ogrenciNotu2= prompt("Lütfen öğrenci notunu giriniz")
let ogrenciNotu3= prompt("Lütfen öğrenci notunu giriniz")
let ogrenciNotu4= prompt("Lütfen öğrenci notunu giriniz")
let ogrenciNotu5= prompt("Lütfen öğrenci notunu giriniz")
ogrenciNotu=parseInt(ogrenciNotu);
ogrenciNotu2=parseInt(ogrenciNotu2);
ogrenciNotu3=parseInt(ogrenciNotu3);
ogrenciNotu4=parseInt(ogrenciNotu4);
ogrenciNotu5=parseInt(ogrenciNotu5);

let sinif= [];
sinif.push(ogrenciNotu);
sinif.push(ogrenciNotu2);
sinif.push(ogrenciNotu3);
sinif.push(ogrenciNotu4);
sinif.push(ogrenciNotu5);

let gecenOgrenci=0;
let toplam=0;
for(let i=0;i<sinif.length;i++) {
    if(sinif[i]>=60) {
        gecenOgrenci=gecenOgrenci+1;
        toplam=toplam+sinif[i];
    }else {
        toplam=toplam+sinif[i];
    }
}
console.log(gecenOgrenci + " öğrenci dersi geçmiştir");
console.log(toplam/sinif.length + " sınfırın ortalamsıdır")
*/
//tahmin uygulaması

let numberCorrect=7;
let tahminHakkı=0;

while (tahminHakkı < 3) {
    let numberTahmin = prompt("tahmininizi giriniz");
    
    numberTahmin=parseInt(numberTahmin);
    if(numberTahmin==numberCorrect){
        console.log("Tebrikler yarışmayı kazandınız")
        tahminHakkı=3;
    }else if(numberTahmin>numberCorrect) {
        console.log("Tahmininiz küçültünüz")
        tahminHakkı=tahminHakkı+1;
    }else if(numberTahmin<numberCorrect) {
        console.log("Tahmininizi yükseltin")
        tahminHakkı=tahminHakkı+1;
    }
}


// -------------------While Alışveriş Sepeti Uygulaması-----------------------

// Kurallar:

// While döngüsü kullanılacak.

// Kullanıcı prompta herhangi bir ürün ismi veya "onayla" yazabilir.

// Ürün ismi yazarsa kullanıcıdan ürünün fiyat bilgisini isteyin ve toplam fiyata ekleyin.

// Kullanıcı "onayla" yazarsa, ekrana sepetin toplam tutar bilgisini yazdırın.
