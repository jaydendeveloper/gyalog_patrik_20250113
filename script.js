import input from "./input.js";

async function getData(){
    const inputData = await input("Hanyas posztot geteljem?: ");

    fetch('https://jsonplaceholder.typicode.com/todos/'+ inputData)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}

async function postData(){
    const inputData = await input("post adat id-je: ");

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            id: inputData
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}

async function putData(){

    const inputData = await input("put adat id-je:");

    fetch("https://jsonplaceholder.typicode.com/posts/" + inputData, {
        method: 'PUT',
        body: JSON.stringify({
            id: inputData,
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}

async function patchData(){

    const inputData = await input("patch adat id-je:");

    fetch("https://jsonplaceholder.typicode.com/posts/" + inputData, {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo'
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}

async function deleteData(){
    const inputData = await input("delete adat id-je:");

    fetch("https://jsonplaceholder.typicode.com/posts/" + inputData, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}

try{
    getData()
.then(()=> {
    postData()
    .then(()=> {
        putData()
        .then(()=> {
            patchData()
            .then(()=> {
                deleteData()
            })
        })
    })
})
} catch(err){
    console.err(err);
}
