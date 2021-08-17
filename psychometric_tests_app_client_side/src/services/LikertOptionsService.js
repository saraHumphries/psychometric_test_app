const baseURL = "http://localhost:8080/likert_options/"


const LikertOptionsService = {

    getLikertOptionsForTest(testId) {
        return fetch(baseURL + `?test_id=${testId}`)
            .then(res => res.json());
    },
    
    postLikertOption(likertOption) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(likertOption),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    }

};

export default LikertOptionsService;