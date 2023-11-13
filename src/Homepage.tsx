import {useState} from "react";
import { FormEvent } from "react"
import { HealthSafteyForm } from "./HealthSafteyForm"
import { MultiForm } from "./MultiForm"
import { PersonalInfoForm } from "./PersonalInfoForm"
import { TravelPreferenceForm } from "./TravelPreferenceForm"

// Define the type of form data
type FormData = {
  Full_Name: string,
  Birthday: string,
  Nationality: string,
  Email: string,
  Phone: string,

  Departure_Date: string,
  Return_Date: string, 
  Accommodation_Preference: string,
  Special_Requests: string,
 
  Emergency_Contact_Name: string,
  Emergency_Contact_Email: string,
  Emergency_Contact_Number: string,
  Any_Medical_Conditions: string
    
  
}

// Define initial data for the form
const INITIALDATA : FormData = {
  Full_Name: "",
  Birthday: "",
  Nationality: "",
  Email: "",
  Phone: "",

  Departure_Date: "",
  Return_Date: "", 
  Accommodation_Preference: "",
  Special_Requests: "",
 
  Emergency_Contact_Name: "",
  Emergency_Contact_Email: "",
  Emergency_Contact_Number: "",
  Any_Medical_Conditions: "",
    
  
}


function Homepage() {

  // State to manage form data
  const [data, setData] = useState(INITIALDATA)

   // Function to update form data based on partial form data
  function Update(fields: Partial <FormData>){
      setData(prev => {
        return{...prev, ...fields}
      })
  }

   // Destructuring values from the MultiForm custom hook
  const {steps, currentStepIndex, step, FirstPage, LastPage, back, next} = MultiForm([
    <PersonalInfoForm {...data}  Update = {Update}/>,
    <TravelPreferenceForm {...data}  Update = {Update}/>, 
    <HealthSafteyForm {...data} Update = {Update}/>
  ])
  // Titles for different form steps
  const titles = ["Personal Information:", "Travel Preferences:", "Health and Safety:"]

   // Function to handle form submission
  function onSub(e: FormEvent){
    e.preventDefault();
    next();
  }
  // Render the main component
  return(

    <div className="Container">
    <h1 className="visith1">{titles[currentStepIndex]}</h1>
    <div  className="center">
    <form onSubmit={onSub} > 
    
    <div className="labeltxt">
      {currentStepIndex + 1}/ {steps.length}
    </div >
    {step}
    <div className="left">
      {FirstPage && <button type="button" className="button" onClick={back}>Back</button>}
      </div>
      <div className="left">
      {LastPage && <button className="button" type="submit">Next</button> }
      {!LastPage && <button className="button" onClick={() => window.alert("SUBMITED: Good luck at Mars!")} type="submit">Submit</button> }
    </div>
    </form>  
    </div>
    </div>
  )
}

export default Homepage
