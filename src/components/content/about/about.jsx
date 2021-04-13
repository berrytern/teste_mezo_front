import './about.css'
export default (props)=>{
    return(
        <div className={props.className||"about"}>{props.info}<a className={(props.subline?"":"nline")+(props.seta?"st":"")} href={props.link}>{props.clickable}</a></div>
        
    )
}