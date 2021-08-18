const baseURL = "http://localhost:8080/questions/"


const QuestionsService = {

    
    postQuestion(question) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    },

    getQuestionsByPsychometricTestId(id) {
        return fetch(baseURL + `?psychometric_test_id=${id}`)
            .then(res => res.json());
    }

};

export default QuestionsService;