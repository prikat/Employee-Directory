import React, { useContext } from "react"
import DeveloperContext from "../utils/DeveloperContext"

const SearchName = () => {
  const context = useContext(DeveloperContext)

  return (
    <div className="searchbox" style={{width: "100%"}}>
      <div className="input-group">
        <input className="form-control" 
          type="search" 
          placeholder="search your employee" 
          aria-label="Search" 
          style={{borderRadius:"50px"}} 
          onChange={e => context.handleSearchChange(e)}
        />
      </div>
    </div>
  )
}

export default SearchName
