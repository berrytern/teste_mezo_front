
import './post.css'
export default (props)=>{
    const title = props.breakTitle?props.title.split(' '):[props.title]
    return(
        <div className={"post "+(props.className||"")}>
            {title.reverse().map((value,index)=>{
                const res=<label className="title">{value}</label>
                const image=props.image?<div className="image">{res}<img src={window.location.origin + '/images/'+props.image}/></div>:res
                return index==0?image:res
            })}
            <label className="text">{props.text}</label>
        </div>
    )
}