const http = new EasyHttpThis;

http.get('https://jsonplaceholder.typicode.com/posts', function(res) {
    console.log(res);
});

const data = {
    title: "Custom Post",
    body: "This is a custom post"
}

http.post('https://jsonplaceholder.typicode.com/posts', data, function (post) {
    console.log(post);
});

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (post) {
//     console.log(post);
// });

// http.delete('https://jsonplaceholder.typicode.com/posts', function(err, res) {

//     if(err) {
//         console.log(err)
//     }else{
//         console.log(res);
//     }
// });