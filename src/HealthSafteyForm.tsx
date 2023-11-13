import { useState } from "react";
// Define a type representing the subset of user data used in the form
type UserFormSub = {
    Emergency_Contact_Name: string,
    Emergency_Contact_Email: string,
    Emergency_Contact_Number: string,
    Any_Medical_Conditions: string,
}
// Define a type representing the extended user data with an "Update" function
type UserUpdate = UserFormSub & {
    Update: (fields: Partial<UserFormSub>) => void
}


// Export a React component named HealthSafteyForm, which takes in the extended user data as props
export function HealthSafteyForm({Emergency_Contact_Name, Emergency_Contact_Email, Emergency_Contact_Number, Any_Medical_Conditions, Update}: UserUpdate){
    
    // State to manage the visibility of additional health and safety information
    const [visible, setVisible] = useState(false);

    return(
        <>
        <label className="labeltxt">Health Declaration (Yes/No)</label>
        <select
        className="inputdrp"
        name="projtype"
        onChange={(e) => {
          if (e.target.value === "No") {
            setVisible(false);
          }
          else{
            setVisible(true);
          }
        }}
      >
            <option value="No">No</option>
            <option value="Yes">Yes</option>

        </select>
        {visible &&<div>
        <label className="labeltxt">Emergency Contact Name</label>
        <input className="inputtxt" autoFocus required type="text" value = {Emergency_Contact_Name} onChange={e => Update({Emergency_Contact_Name: e.target.value})}/>

        <label className="labeltxt">Emergency Contact Email</label>
        <input className="inputtxt"  required type="email" value = {Emergency_Contact_Email} onChange={e => Update({Emergency_Contact_Email: e.target.value})}/>

        <label className="labeltxt">Emergency Contact Number</label>
        <input className="inputtxt" required type="number" value = {Emergency_Contact_Number} onChange={e => Update({Emergency_Contact_Number: e.target.value})}/>

        <label className="labeltxt">Any Medical Conditions (if applicable)</label>
        <input className="inputtxt" type="text" value = {Any_Medical_Conditions} />
        </div>}
        </>
    )
}