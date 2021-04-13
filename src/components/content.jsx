
import './content.css'
import IconText from './content/icontext/icontext'
import Topic from './content/topic/topic'
import Post from './content/post/post'
import PostImage from './content/postimage/postimage'
import About from './content/about/about'

const defaultText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
const defaultTitle="fortalecimento capilar"
const about_info="para mais informações acesse o"
const about_clickable="Dermaclub";
const about_link="https://www.dermaclub.com.br/";
export default (props)=>(
    <div className="content">
        <div className="model">
            <Topic filename="modelo.jpg" className="topic" breakTitle={true} title={defaultTitle} text={defaultText} image="cabelo.png"/>
        </div>
        <div>
            <div id="operation">
                <IconText filename="9btn.svg" text="Quantidade"/><IconText filename="ordenar.svg" text="Ordenar" rotate={true}/>
            </div>
            <div className="posts">
                <Post title="shampoo e cosméticos" text={defaultText} className="li no-bg"/>
                <PostImage filename="model.jpeg" className="post-extended" info={about_info} link={about_link} clickable={about_clickable} subline={false}>
                    <Post title="shampoo e cosméticos" text={defaultText} className="bg"/>
                    <Post title="shampoo e cosméticos" text={defaultText} className="bg"/>
                </PostImage>
                <Post title="shampoo e cosméticos" text={defaultText} className="li bg"/>
                <About info={about_info} link={about_link} clickable={about_clickable} subline={true}/>
                <div className="end"/>
            </div>
        </div>
    </div>
)