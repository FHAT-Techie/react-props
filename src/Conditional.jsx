function Conditional(props) {
    if(props.clientAge >= 18){
return(
    <h1 className="yes">You can buy the house</h1>
)
    }else{
        return(<h1 className="no">you cant buy the house</h1>)
    }
}

export default Conditional