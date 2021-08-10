const baseURL = "http://localhost:8080/psychometric_tests/";

const PsychometricTestsService = {

    getPsychometricTests() {
        return fetch(baseURL)
        .then(res => res.json());
    },


};

export default PsychometricTestsService;