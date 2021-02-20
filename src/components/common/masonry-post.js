import React from 'react';
import money from './money.png';
// import images from './images';

export default function MasonryPost({post, tagsOnTop}){

//      function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }

//     const images = importAll(require.context('./images', false, /^jpg$/));

    // <img src={images['0.png']} />

    console.log(images[`${post.title}`]);
    const imgURL = (`./images/${post.image}`);
    const bgstyle =  {backgroundImage : `url("${imgURL}")` };
    
    return (
        <a className="masonry-post overlay" style={bgstyle} href={post.link}>
            <div className="image-text">
                <div>
                    <h2 className="image-title">{post.title}</h2>
                    <span className="image-date">{post.date}</span>
                    {/* <img src={money} alt="TMKC" /> */}
                </div>
            </div>
        </a> 
    )
}