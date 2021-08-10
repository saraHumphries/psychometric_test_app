const baseURL = "http://localhost:8080/test_attempts/";

const TestAttemptService = {

    getTestAttempts() {
        return fetch(baseURL)
        .then(res => res.json());
    },

    postTestAttempt(testAttempt) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(testAttempt),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    }


};

export default TestAttemptService;