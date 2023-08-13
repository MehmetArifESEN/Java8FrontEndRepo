
// Aşağıda tarifinden anlayacağınız istekleri https://jsonplaceholder.typicode.com/ URL'ine atın. 
//her bir isteği 1 kere then, 1 kere de async/await yöntemi ile atın. update isteğini Put ve Patch olacak şekilde ayrı ayrı atın. 
//Toplamda 5 then, 5 async/await isteği atacaksınız. isteklerinizi fonksiyon içerisinde tanımlayın.

//getCommentById, getAllComments, deleteComment, updateComment

//JSONPlaceholder - Free Fake REST API



//updateComment = put ve patch

const jsonPlaceholderUrl = "https://jsonplaceholder.typicode.com/";

// //fetch
//GET
    fetch(`${jsonPlaceholderUrl}comments?id=3`)
    .then((res) => {
    console.log(res);
    return res.json();
  })
   .then((data) => console.log(data));

   const getCommentById = async (commentİd) => {
    const res = await fetch(`${jsonPlaceholderUrl}comments?id=${commentİd}`)
    const data = await res.json()
    console.log(data);

    return data
}

getCommentById(5);



fetch(`${jsonPlaceholderUrl}comments/`)
.then((res) => {
console.log(res);
return res.json();
})
.then((data) => console.log(data));

const getAllComments = async () => {
const res = await fetch(`${jsonPlaceholderUrl}comments/`)
const data = await res.json()
console.log(data);

return data
}

getAllComments();


const commentId ={id:5}
fetch(`${jsonPlaceholderUrl}comments/${commentId.id}`, {
    method: 'DELETE',
})
.then(response => {
    return response.json( )
})
.then(data => 
    console.log(data) 
);

const deleteComment = async (id) => {
  const res = await fetch(`${jsonPlaceholderUrl}comments/${id}`, {
    method: 'DELETE',
})
const data= await res.json()
console.log(data);
return data
}

deleteComment(commentId.id)

const comment = {
  postId: 1,
  body: "aaaa bbbb cccc ddddd"
};

const updateCommentFetch = (comment,commentid) => {
  return fetch(`${jsonPlaceholderUrl}comments/${commentid}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  }).then(response => {
    return response.json()
})
.then(data => 
    console.log(data) 
)

};

updateCommentFetch(comment,6)

const updateCommentAwait = async (commentid,comment) => {
  const res = await fetch(`${jsonPlaceholderUrl}comments/${commentid}`, {
    method: 'PUT',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
})
const data= await res.json(comment)
console.log(data);
return data
}

updateCommentAwait(7,comment);






