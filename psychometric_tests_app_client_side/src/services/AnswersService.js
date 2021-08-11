const baseURL = "http://localhost:8080/answers/";

const AnswersService = {

    getAnswers() {
        return fetch(baseURL)
        .then(res => res.json());
    },

    postAnswer(answer) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(answer),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    }


};

export default AnswersService;