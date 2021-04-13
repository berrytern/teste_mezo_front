import Image from '../image/image'
import Post from '../post/post'
import './topic.css'
export default (props)=>{
    return (
    <>
        <Image filename={props.filename} className={""/*props.className*/}/>
        <div >
            <Post title={props.title} text={props.text} breakTitle={props.breakTitle} image={props.image}/>
        </div>
    </>
    )
}