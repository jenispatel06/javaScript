// function doSomething() {
//     return new Promise((resolve, reject) => {
//         const sum = 1 + 1;
//         if (sum === 2) resolve("Correct"); 

//         else reject("Wrong");
//     });
// }
// console.log(doSomething());


// callback hell
function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users');
}
function getTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos');
}
function getAlbums() {
    return fetch('https://jsonplaceholder.typicode.com/albums');
}

getUsers()
    .then(res => res.json())
    .then(users => {
        getTodos()
            .then(res => res.json())
            .then(todos => {
                getAlbums()
                    .then(res => res.json())
                    .then(albums => {

                    })
            })
    })
