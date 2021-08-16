const baseURL = "http://localhost:8080/likert_options/"


const LikertOptionsService = {

    getLikertOptionsForTest(testId) {
        return fetch(baseURL + `?test_id=${testId}`)
            .then(res => res.json());
    }    

};

export default LikertOptionsService;