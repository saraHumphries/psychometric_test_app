import Chart from "./Chart";


const SummaryQuestionBox = function({question, getQuestionSummary}) {

    const questionSummary = getQuestionSummary(question.id);



    return (
        <div>
            <h3>{question.questionText}</h3>
            <Chart questionSummary = {questionSummary}></Chart>
            <div id = 'results-by-response'>
                <p>{questionSummary[1]}</p>
                <p>{questionSummary[2]}</p>
                <p>{questionSummary[3]}</p>
                <p>{questionSummary[4]}</p>
                <p>{questionSummary[5]}</p>
                <p>{questionSummary[6]}</p>
            </div>
        </div>
    );
};

export default SummaryQuestionBox;