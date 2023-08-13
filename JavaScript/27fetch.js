function getData(url) {
    return fetch(url).then((response)=>{
    return response.json();
})
.then((response)=>{
    return response;
});
}

async function callServices() {
    const res1= await getData("https://jsonplaceholder.typicode.com/comments");
    //console.log(res1);
    const res2 = await getData(`https://jsonplaceholder.typicode.com/comments?id=${res1[0].id}`);
    console.log(res2);
}

callServices();

