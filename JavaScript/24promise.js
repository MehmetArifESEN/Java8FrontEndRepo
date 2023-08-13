// Promise parametre olarak bir function bekler.
// Bu function'ın bize verdiği resolve ve reject parametreleri vardır.
// resolve bir function'dır ve işlem başarısızsa reject function'ı çağırılır.
// reject de bir function'dır veişlem başarısızsa reject function'ı çağırılır.
function addString(prev,current) {
    

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(`${prev} ${current}`);
    },3000);
});
}

addString("","A")
    .then((result)=>{
    return addString(result, "B");
    })
    .then((result)=>{
    console.log(result);
});