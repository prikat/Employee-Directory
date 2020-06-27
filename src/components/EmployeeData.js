import React, { useState, useEffect } from "react"
import NavBar from "./NavBar"
import EmployeeTable from "./EmployeeTable"
import API from "../utils/API"
import DeveloperContext from "../utils/DeveloperContext"

const EmployeeData = () => {

  const [developerState, setDeveloperState] = useState({
    users: [],
    order: "descending",
    filteredUsers: [],
    headings: [
      { name: "Image", width: "10%", order: "descending" },
      { name: "name", width: "10%", order: "descending" },
      { name: "phone", width: "20%", order: "descending" },
      { name: "email", width: "20%", order: "descending" },
      { name: "dob", width: "10%", order: "descending" }
    ]
  })

  const handleSort = heading => {
    let currentOrder = developerState.headings.filter(elem => elem.name === heading).map(elem => elem.order).toString()
    if (currentOrder === "descending") {
      currentOrder = "ascending"
    } 
    else {
      currentOrder = "descending"
    }
    const compareFunction = (a, b) => {
      if (currentOrder === "ascending") {
        if (a[heading] === undefined) {
          return 1
        } 
        else if (b[heading] === undefined) {
          return -1
        }
        else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first)
        } 
        else if (heading === "dob") {
          return a[heading].age - b[heading].age
        } 
        else {
          return a[heading].localeCompare(b[heading])
        }
      } 
      else {
        if (a[heading] === undefined) {
          return 1
        } 
        else if (b[heading] === undefined) {
          return -1
        }
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first)
        }
        else if (heading === "dob") {
          return b[heading].age - a[heading].age
        }  
        else {
          return b[heading].localeCompare(a[heading])
        }
      }
    }
    const sortedUsers = developerState.filteredUsers.sort(compareFunction)
    const updatedHeadings = developerState.headings.map(elem => {
      elem.order = elem.name === heading ? currentOrder : elem.order
      return elem
    })
    setDeveloperState({ ...developerState, filteredUsers: sortedUsers, headings: updatedHeadings })
  }

  const handleSearchChange = event => {
    const filter = event.target.value
    const filteredList = developerState.users.filter(item => {
      let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase()
      console.log(filter, values)
      if(values.indexOf(filter.toLowerCase()) !== -1){
        return item
      }
    })
    setDeveloperState({ ...developerState, filteredUsers: filteredList })
  }

  useEffect(() => {
    API.getUsers().then(results => {
      console.log(results.data.results)
      setDeveloperState({...developerState, users: results.data.results, filteredUsers: results.data.results })
    })
  }, [])
  
  return (
    <DeveloperContext.Provider
    value={{ developerState, handleSearchChange, handleSort }}>
    <NavBar />
    <div className="data-area">{developerState.filteredUsers.length > 0 ? <EmployeeTable /> : <div></div>}</div>
    </DeveloperContext.Provider>
  )
}

export default EmployeeData