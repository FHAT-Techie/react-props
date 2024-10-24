import PropTypes from "prop-types"


function Card(props){
    return(
    <div className="card">
       <h1 className="cardTitle">{props.titleText}</h1>
       <p className="cardDescription"> {props.descriptionText} </p>
    </div>
    )
}

Card.propTypes =  {
   titleText : PropTypes.string,
   descriptionText : PropTypes.string
}


Card.defaultProps = {
    titleText : "Title Text",
    descriptionText  : "Description Text"
}
export default Card