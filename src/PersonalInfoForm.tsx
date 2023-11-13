// Define a type representing the subset of user data used in the form
type UserFormSub = {
    Full_Name: string,
    Birthday: string,
    Nationality: string,
    Email: string,
    Phone: string,
}
// Define a type representing the extended user data with an "Update" function
type UserUpdate = UserFormSub & {
    Update: (fields: Partial<UserFormSub>) => void
}


// Export a React component named PersonalInfoForm, which takes in the extended user data as props
export function PersonalInfoForm({Full_Name, Birthday, Nationality, Email, Phone, Update}: UserUpdate){
    return(
        <>
        <label className="labeltxt">Full Name</label>
            <input className="inputtxt" autoFocus required type="text" value={Full_Name} onChange={e => Update({Full_Name: e.target.value})}/>

            <label className="labeltxt">Birthday</label>
            <input className="inputtxt" required type="date" value={Birthday} onChange={e => Update({Birthday: e.target.value})}/>

            <label className="labeltxt">Nationality</label>
            <input className="inputtxt" required type="text" value={Nationality} onChange={e => Update({Nationality: e.target.value})}/>

            <label className="labeltxt">Email</label>
            <input className="inputtxt" required type="email" value={Email} onChange={e => Update({Email: e.target.value})}/>

            <label className="labeltxt">Phone</label>
            <input  className="inputtxt" required type="tel" value={Phone} onChange={e => Update({Phone: e.target.value})}/>
        </>
    )
}