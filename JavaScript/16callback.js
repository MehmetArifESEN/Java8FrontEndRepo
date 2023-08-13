function getBooks(books = [], callback) {
    const bookStr = books.join(", ");
    if(callback) {
        callback(bookStr);
    }
}

const myBooks = ["Sefiller","Genç Werther'in Acıları","Harry Potter"];

function writeToConsole(books) {
    console.log(`Benim ${books} isimli kitaplarım var.`)
}

writeToConsole(myBooks, writeToConsole);