import React from "react"
import Image from '../image/image'
import About from '../about/about'
import './postimage.css'
export default (props)=>{
    return(
        <div className={props.className}>
            <div className="childrens">{props.children}</div>
            <div className="childrens"><About className="img-post" info={props.info} link={props.link} clickable={props.clickable} subline={props.subline}/><Image {...props}/></div>
        </div>
    )
}