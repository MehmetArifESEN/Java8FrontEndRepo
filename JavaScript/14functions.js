const hivda = {
    name: "Hivda",
    surname: "Aydogan",
    date: 1998,
    town: "Ankara",
};

function getHivdasInfo() {
    for(const key in hivda) {
        const value = hivda[key];
        console.log(`${key.toUpperCase()}:${value}`);
    }
}


// Arrow function ES6 ile geldi
const printDescription=()=> {
    console.log("Hivda'nın özellikleri aşağıda yer alıyor.");
} 

const getHivdasLife = function(){
    printDescription();
    getHivdasInfo();
};

getHivdasLife();

const getHivdasDate=()=>{
    return hivda.date; // hivda["date"]
};

console.log(getHivdasDate());