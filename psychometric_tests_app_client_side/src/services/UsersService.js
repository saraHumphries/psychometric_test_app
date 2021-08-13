const baseURL = "http://localhost:8080/users/";

const UsersService = {

    getUsers() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    getUserById(id) {
        return fetch(baseURL + id)
            .then(res => res.json());
    },

    getUserByTestAttemptId(testAttemptId) {
        return fetch(baseURL + `?test_attempt_id=${testAttemptId}`)
            .then(res => res.json());
    },

    postUser(user) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
            })
                .then(res => res.json());
    }


};

export default UsersService;