const lab4URL = 'https://glo3102lab4.herokuapp.com/';
const userURL = 'https://glo3102lab4.herokuapp.com/f4d17594-e367-4a9d-8f3a-90d267f782e6/tasks';

// 1 – GET /<userId>/tasks
// ➔ Retourne toutes les tâches actuelles.
let getUserTasks = fetch(userURL)
    .then((res) =>  res.json())
    .then((data) =>{
        console.log(data);
    }).catch((err)=>console.log(err));


// 2 – POST /<userId>/tasks
// ➔ Permet de créer une nouvelle tâche.
let postUntask = fetch(userURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            "name": [
                {"task1": "tp1"},
                {"task2": "lab4"},
                {"task3": "Tp2"}
            ]
        })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));


// 3 – PUT /<userId>/tasks /<id>
// ➔ Permet de modifier la tâche associée à l’id.
let taskId = '9b95d389-562a-4cb5-bd9b-e29fb826f0d6';
let taskIdUrl = 'https://glo3102lab4.herokuapp.com/f4d17594-e367-4a9d-8f3a-90d267f782e6/tasks/a966630f-ec33-4dfc-a6cd-54f4d0ee6e17';

let putUserTask = fetch(url, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body:JSON.stringify( {
            "name": [
                {"task1": "tp1"},
                {"task2": "lab4 est fini!!!"},
                {"task3": "Tp2"}
            ]
        })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}


// 4 – DELETE /<userId>/tasks /<id>
// ➔ Permet de supprimer la tâche associée à l’id.
let deleteUserTask = fetch(taskIdUrl, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body:JSON.stringify({})
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}



