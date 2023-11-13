import {ReactElement, useState} from "react";

// Export a custom hook named MultiForm
export function MultiForm(steps: ReactElement[]){
     // State to keep track of the current step index
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
     // Function to navigate to the next step
    function next(){
        setCurrentStepIndex(i => {
            if(i >= steps.length - 1){
                return i;
            }
            else{
                return i + 1;
            }
        })

    }
    // Function to navigate to the previous step
    function back(){
        setCurrentStepIndex(i => {
            if(i == 0){
                return i;
            }
            else{
                return i - 1;
            }
        })

    }
     // Function to directly go to a specific step by index
    function goTo(index: number){
        setCurrentStepIndex(index);
    }
    // Return an object with information about the current step and navigation functions
    return{
        currentStepIndex,
        step: steps[currentStepIndex], // The current step component
        steps, // Array of all step components
        FirstPage: currentStepIndex !== 0, // Boolean indicating whether it's the first page
        LastPage: currentStepIndex !== steps.length - 1, // Boolean indicating whether it's the last page
        goTo, // Function to go to a specific step
        next, // Function to go to the next step
        back, // Function to go back to the previous step
      
    }

}