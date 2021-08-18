import { useLocation } from "react-router";

const CreateSummaryPage = function() {

    const data = useLocation();
    const newPsychometricTest = data.state.newPsychometricTest;


    const getLikertButtons = function() {
            newPsychometricTest.likertOptions.sort((a,b) => a.likertValue - b.likertValue);
            const likertButtons = newPsychometricTest.likertOptions.map((likertOption) => {
                return <button className='button' id={"likert-button" + likertOption.likertValue} value={likertOption.likertValue}>{likertOption.likertText}</button>
            });
            return likertButtons;
        
    };

    return (
        <div>
            <h2>Your Summary</h2>
            <div className='likert-buttons'>{getLikertButtons()}</div>
        </div>
    );

};

export default CreateSummaryPage;