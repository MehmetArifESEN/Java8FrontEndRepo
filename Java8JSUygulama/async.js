const jsonPlaceHolderUrl = "https://jsonplaceholder.typicode.com/"

/*
const get = (url,cb) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET",url,true)
    xhr.send();
    xhr.onreadystatechange = ()=> {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200) {
                const response = JSON.parse(xhr.responseText)
                cb(null,response)
            } else {
                cb("Hata: " + xhr.status,null)
            }
        }
    }
    
}

get(`${jsonPlaceHolderUrl}users/1`, (err,data) =>{
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
})
*/
//callback hell

// Promise
