
// Kullanıcıdan bir ay ismi alın ve girilen ayın kaç gün olduğunu konsola yazdırın. (Switch Case)

 

// BMW, Mercedes ve Audi Markaları için farklı renk çeşitlerine göre stok durumunu kontrol eden iç içe bir switch yapısı oluşturun.
// yaratacağınız stokDurumu değişkenini stokta "Var" veya "Yok" olarak güncellesin.

//1. sorı

const ay = prompt("Ayın Adını giriniz");

switch (ay) {
    case "nisan", "haziran", "eylül" ,"kasım" :
        console.log("Girdiğiniz ayda 30 gün mevcut");
        break;
    case "ocak", "mart", "mayıs", "temmuz", "ağustos", "ekim" , "aralık" :
        console.log("Girdiğiniz ayda 31 gün mevcut");    
        break;
    case "şubat":
        console.log("Ortak yıllarda 28 artık yıllarda 29 gün mevcuttur");
        break;    
    default:
        console.log("Lütfen ay adını doğru giriniz.");
        break;
}

//2. soru
let araclar=[["BMW","mavi"],["BMW","sarı"],["Audi","kırmızı"],["Mercedes","sarı"],["Mercedes","kırmızı"]]





const markaRenk = {
    marka: prompt("Marka"),
    renk: prompt("Renk"),

};

switch (marka) {
    case value:
        
        break;

    default:
        break;
}