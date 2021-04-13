export default (props)=>{
    return(
        <img src={window.location.origin + '/images/'+props.filename} width={props.size?props.size:""} className={props.className|| "" +(props.rotate?" rotate":"")} />
    )
}