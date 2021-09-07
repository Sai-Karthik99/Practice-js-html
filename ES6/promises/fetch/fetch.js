fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(myjson => console.log(myjson))
    .catch(err => console.error(err))