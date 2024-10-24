import PropTypes, { string } from "prop-types"
import { Component } from "react"
function ConditionalCard({gender,name,age,country}) {
    

    if(gender == `male`){
        return(
            <div className="maleCard">
                <h1>{name}</h1>
                <h1>{age}</h1>
                <h1>{country}</h1>
            </div>
        )
    }else{
     return  ( <div className="femaleCard">
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{country}</h1>
    </div> ) 
    }
}

ConditionalCard.propTypes = {
    name : PropTypes.string.isRequired
}
export default ConditionalCard