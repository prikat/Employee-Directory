import React, {useContext} from "react"
import DeveloperContext from "../utils/DeveloperContext"

const SearchDOB = () =>{
    const context = useContext(DeveloperContext)

    return(
        <div className="searchbox">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span class="input-group-text" id="">DOB</span>
                </div>
                <input type="date" className="form-control" onChange={e => context.handleSearchChange(e)} />
                <input type="date" className="form-control" onChange={e => context.handleSearchChange(e)} />
                </div>
        </div>
    )
}
export default SearchDOB
