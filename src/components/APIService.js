export default class APIService {
    static InsertArticle(body) {
        return fetch(`http://localhost:5000/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .catch(error => console.log(error));
    }
}

/*
export default class APIService {
    static PostData(name, age, date, programming) {
        return fetch(`http://localhost:5000//add_todo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            name: JSON.stringify(name),
            age: JSON.stringify(age),
            data: JSON.stringify(date),
            programming: JSON.stringify(programming)
        })
        .then(response => response.json())
        .catch(error => console.log(error));
    }
}
*/