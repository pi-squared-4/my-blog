import React from 'react';
import {TagRow} from './';

// import money from './money.png';
// import images from './images';

export default function MasonryPost({post, tagsOnTop}){
    const  windowWidth = window.innerWidth;
    


    const imageBackground =  {backgroundImage : `url("${require(`../../assets/images/${post.image}`).default}")` };
    const style = windowWidth > 900 ?  {...imageBackground, ...post.style} : imageBackground;

    return (
        
        <a className="masonry-post overlay" style={style} href={post.link}>
            <div className="image-text" style={{justifyContent: tagsOnTop ? 'space-between' : 'flex-end'}}>
               <TagRow tags ={post.categories} />
                <div>

                    <h2 className="image-title">{post.title}</h2>
                    <span className="image-date">{post.date}</span>
                    {/* <img src={money} alt="TMKC" /> */}
                </div>
            </div>
        </a> 
    )
}