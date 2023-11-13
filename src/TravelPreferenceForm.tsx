
// Define a type representing the subset of user data used in the form
type UserFormSub = {
    Departure_Date: string,
    Return_Date: string, 
    Accommodation_Preference: string,
    Special_Requests: string,
}
// Define a type representing the extended user data with an "Update" function
type UserUpdate = UserFormSub & {
    Update: (fields: Partial<UserFormSub>) => void
}
// Export a React component named PersonalInfoForm, which takes in the extended user data as props
export function TravelPreferenceForm({Departure_Date, Return_Date, Accommodation_Preference, Special_Requests, Update}: UserUpdate){
    return(
        <>
        <label className="labeltxt">Departure Date</label>
        <input className="inputtxt" autoFocus required type="date" value = {Departure_Date} onChange={e => Update({Departure_Date: e.target.value})}/>

        <label className="labeltxt">Return Date</label>
        <input className="inputtxt" required type="date" value = {Return_Date} onChange={e => Update({Return_Date: e.target.value})}/>

        <label className="labeltxt">Accommodation Preference</label>
        <input className="inputtxt" required type="text" value = {Accommodation_Preference} onChange={e => Update({Accommodation_Preference: e.target.value})}/>

        <label className="labeltxt">Special Requests or Preferences</label>
        <input className="inputtxt" required type="text" value = {Special_Requests} onChange={e => Update({Special_Requests: e.target.value})}/>
        </>
    )
}