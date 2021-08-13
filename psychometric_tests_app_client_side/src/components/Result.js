
const Result = function({answer}) {
    return (
        <div>
            <p>Question id: {answer.question.id}</p>
            <p>{answer.question.questionText}</p>
            <p> Your response: {answer.response}</p>
        </div>
    )
};

export default Result;