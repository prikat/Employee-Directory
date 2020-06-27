import React, {useContext} from "react"
import DeveloperContext from "../utils/DeveloperContext"

const EmployeeBody = () => {
    const context = useContext(DeveloperContext)
    
    function formatDate(date){
        const dateArray = date.split("-")
        const year = dateArray[0]
        const month = dateArray[1]
        const dayArray = dateArray[2].split("T")
        const day = dayArray[0]
        const formattedDate = [month, day, year].join("-")
        return formattedDate
    }
    return(
        <tbody>
        {context.developerState.filteredUsers[0] !== undefined && context.developerState.filteredUsers[0].name !== undefined ?(
            context.developerState.filteredUsers.map(({ login, name, picture, phone, email,dob}) => {
                return(
                    <tr key={login.uuid}>
                    <td data-th="Image" className="align-middle">
                    <img src={picture.medium} alt={"profile image of " + name.first + " " + name.last} className="img-responsive" />
                    </td>
                    <td data-th="name" className= "name-cell align-middle" style= {{textTransform: "capitalize"}}>{name.first} {name.last}</td>
                    <td data-th="phone" className= "align-middle">{phone}</td>
                    <td data-th="Email" className= "align-middle"><a href={"mail:" + email} target="__blank">{email}</a></td>
                    <td data-th="DOB" className= "align-middle">{formatDate(dob.date)}</td>
                    </tr>
                )
            })
        ):(
            <></>
        )}
        </tbody>
    )
}       

export default EmployeeBody