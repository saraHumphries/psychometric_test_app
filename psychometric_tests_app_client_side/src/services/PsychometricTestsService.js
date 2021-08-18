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
    },

    postPsychometricTest(psychometricTest) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(psychometricTest),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    },

    deletePsychometircTestById(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    }
};


export default PsychometricTestsService;