export default class APIService {
    static PostData(body) {
        return fetch(`http://localhost:5000//add_todo`, {
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