const http = new easyHTTP;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
    if(err) {
        console.log(err);
    }else{
        let output = '';
        response.forEach(function(post) {
            output += `
                <li>ID: ${post.id}</li>
                <li>Body: ${post.body}</li>
                <li>Title: ${post.title}</li>
                <br>
            `
        })
        document.querySelector('.post').innerHTML = output;
    }
});

// Get Single Post
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
    if(err) {
        console.log(err);
    }else{

        let output = `
            <li>${response.body}</li>
        `;
        document.body.innerHTML = output;
    }
});

// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// Create post
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
    if(err) {
        console.log(err)
    }else{
        let output = `
        <li>${post.title}</li>
        <li>${post.body}</li>
        `;

        document.body.innerHTML = output;
    }
})

//Update post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
    if(err) {
        console.log(err)
    }else{
        let output = `
        <li>${post.title}</li>
        <li>${post.body}</li>
        <li>${post.id}</li>
        `;

        document.body.innerHTML = output;
    }
})

// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
    if(err) {
        console.log(err);
    }else{

        let output = `
            <li>${response}</li>
        `;
        document.body.innerHTML = output;
        console.log(response)
    }
});