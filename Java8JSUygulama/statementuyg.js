
// Bir kelimeyi tersine çevirerek farklı bir değişkene atayın. Orijinal kelimenin palindrom (tersine de aynı olan) olup olmadığını kontrol eden bir if else yapısı oluşturun. Örneğin, "kayak" kelimesi palindromdur, ancak "merhaba" palindrom değildir.


// Kullanıcıdan temsili bir oy verme ve aday olma durumlarını sorgulamak için yaş ve uyruk bilgisi alın. Aşağıdaki koşulları uygulayan bir if sorgusu yazın.

// a- Türk vatandaşı ve 30 yaşından büyük ise aday olabilir.

// b- Türk vatandaşı ve 18 yaşından büyük ise oy kullanabilir.

// c- Türk vatandaşı değilse ancak 18 yaşından büyük ise aday olamaz ama oy verebilir.

let kelime= "ahmet";

let kelimeTers="";

for(let i=kelime.length; i>=0; i--){
    kelimeTers= kelimeTers + kelime.charAt(i);
}
console.log(kelimeTers);

if(kelimeTers=== kelime){
    console.log("Kelime palindromdur.");
} else {
    console.log("kelime palindrom değildir");
}

// 2. soru

const infos= {
    uyruk: prompt("Uyruğunuz:"),
    yas: prompt("Yaşınız:"),
};

if(infos.uyruk==="Turk" && infos.yas>=30) {
    console.log("Aday olabilirsiniz");
} else if(infos.uyruk==="Turk" && infos.yas>=18) {
    console.log("Oy kullanabilirsiniz");
} else if(infos.uyruk!="Turk" && infos.yas>=18) {
    console.log("Aday olamazsınız ama Oy kullanabilirsiniz");
} else {
    console.log("Yaşınız 18 den kucuk oldugu ıcın işlem yapamazsınız");
}
