
const Result = function({answer}) {
    return (
        <div>
            <p>{answer.question.questionText}</p>
            <p> Your response: {answer.response}</p>
        </div>
    )
};

export default Result;