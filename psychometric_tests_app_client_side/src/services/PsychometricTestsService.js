const baseURL = "http://localhost:8080/psychometric_tests/";

const PsychometricTestsService = {

    getPsychometricTests() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    getPsychometricTestById(id) {
        return fetch(baseURL + id) 
            .then(res => res.json());
        
    },

    getPsychometricTestsSummaries(psychometricTestId) {
        return fetch(baseURL + `/${psychometricTestId}/summary`)
            .then(res => res.json());
    },

    getPsychometricTestsTotalScores(psychometricTestId) {
        return fetch(baseURL + `/${psychometricTestId}/total_scores`)
            .then(res => res.json());
    }
};


export default PsychometricTestsService;