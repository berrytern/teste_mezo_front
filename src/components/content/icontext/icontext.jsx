import React from 'react'
import Image from '../image/image'
import './icontext.css'

export default (props)=>{
    return (
        <div className={props.classname||"icon-lb"}>
            <Image filename={props.filename} width="20px" size="20px" rotate={props.rotate} />
            <label>{props.text}</label>
        </div>
    )
}