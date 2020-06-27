import React from "react"

function Header (){
    const headerStyle = {
        padding: "30px 0",
        color: "#ffffff",
        backgroundImage:"linear-gradient(to right, rgba(30,130,76,1),rgba(0,0,0,255))",
        width:"100%",
        textAlign: "center",
        marginBottom: "20px",
    }
    return(
        <div className="header" style={headerStyle}>
            <h1 style={{fontSize:"80px", fontWeight:"bolder"}}>
            <span><i class="fa fa-address-book-o" aria-hidden="true" 
            style={{fontSize:"80px"}}></i></span>  EMPLOYEE DIRECTORY
            </h1>
        </div>
    )
}
    
export default Header