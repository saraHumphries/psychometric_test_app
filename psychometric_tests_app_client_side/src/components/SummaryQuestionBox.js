import ChartDisplay from "./ChartDisplay";


const SummaryQuestionBox = function({likertOptions, question, getQuestionSummary, getQuestionResponse}) {

    const questionSummary = getQuestionSummary(question.id);

    const getResponseText = function() {
        const responseInt = getQuestionResponse(question.ordering);
        if(responseInt == 1) {
            return 'disagree';
        }
        else if(responseInt == 2) {
            return 'slightly disagree';
        }
        else if(responseInt == 3) {
            return 'neither agree nor disagree';
        }
        else if(responseInt == 4) {
            return 'slightly disagree';
        } 
        else if(responseInt == 5) {
            return 'disgaree';
        }
    };

    const getLikertText = function() {
        const responseInt = getQuestionResponse(question.ordering);
        for(let likertOption of likertOptions) {
            
            if(likertOption.likertValue == responseInt) {
                return likertOption.likertText;
            };
        };
    };


    return (
        <div>
            <h3>{question.questionText}</h3>
            <h4>Your answer was {getLikertText()}</h4>
            <ChartDisplay likertOptions = {likertOptions} response = {getQuestionResponse(question.ordering)}questionSummary = {questionSummary}></ChartDisplay>
        </div>
    );
};

export default SummaryQuestionBox;