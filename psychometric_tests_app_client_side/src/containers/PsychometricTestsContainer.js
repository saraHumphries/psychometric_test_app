import { useState, useEffect, useRef, useCallback } from "react";
import PsychometricTestsService from "../services/PsychometricTestsService";
import PsychometricTestList from "../components/PsychometricTestList";
import PsychometricTest from "./PsychometricTest";
import TestAttemptService from "../services/TestAttemptsService";


// Hook for returning promise on setState

const useStateWithPromise = (initialState) => {
    const [state, setState] = useState(initialState);
    const resolverRef = useRef(null);
  
    useEffect(() => {
      if (resolverRef.current) {
        resolverRef.current(state);
        resolverRef.current = null;
      }
      /**
       * Since a state update could be triggered with the exact same state again,
       * it's not enough to specify state as the only dependency of this useEffect.
       * That's why resolverRef.current is also a dependency, because it will guarantee,
       * that handleSetState was called in previous render
       */
    }, [resolverRef.current, state]);
  
    const handleSetState = useCallback((stateAction) => {
      setState(stateAction);
      return new Promise(resolve => {
        resolverRef.current = resolve;
      });
    }, [setState])
  
    return [state, handleSetState];
  };

// end

function PsychometricTestContainer() {

    const [psychometricTests, setPsychometricTests] = useState([]);
    const [selectedPsychometricTest, setSelectedPsychometricTest] = useStateWithPromise(null);
    
    useEffect(() => {
        PsychometricTestsService.getPsychometricTests()
        .then(res => setPsychometricTests(res));
    }, []);



    const onPsychometricTestClick = function(psychometricTest) {
        setSelectedPsychometricTest(psychometricTest)
                .then(() => createUserTestAttempt(psychometricTest));
    }

    const createUserTestAttempt = function(psychometricTest) {
        console.log("creating test attempt");
        const user = {
            id: 1,
            name: "Sara"
        };
        const test = psychometricTest;
        const testAttempt = {user, test};
        console.log(testAttempt);
        TestAttemptService.postTestAttempt(testAttempt);
    };



    return (
        <div>
            <p>Pick a test to have a go at</p>
            <PsychometricTestList onPsychometricTestClick = {onPsychometricTestClick} psychometricTests = {psychometricTests}></PsychometricTestList>
            {selectedPsychometricTest ? <PsychometricTest psychometricTest = {selectedPsychometricTest}></PsychometricTest> : null}
        </div>  
    );
}

export default PsychometricTestContainer;