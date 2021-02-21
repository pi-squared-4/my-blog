import React from 'react';
import trending from '../assets/mocks/trending';
import {MasonryPost, PostMasonry, PostGrid} from '../components/common'; 
import featured from '../assets/mocks/featured';


const trendingConfig ={
    1: {
        gridArea: '1 / 2 / 3 / 3'

    }
}

const featuredConfig = {
    0: {
        gridArea: '1 / 1 / 2 / 3',
        height: '300px',

    },
    2: {
        height: '300px',
    }, 
    3: {
        height: '630px',
        marginLeft: '30px',
        width : '630px',
    }
     
}

const mergeStyle = function (posts , config){
    posts.forEach((post, index) => {
        post.style = config[index]
        post.author = 'pi Squared'
        post.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    })
}

const recentPosts = [...trending, ...featured, ...featured]



mergeStyle(trending, trendingConfig);
mergeStyle(featured, featuredConfig);

const lastFeatured = featured.pop()

export default function Home() {
    return (
    <main className="home">
    <section className="container">
        <div className="row">          
            <section className="featured-posts-container">
                <PostMasonry posts={featured} columns={2} tagsOnTop={true}/>
                <MasonryPost post={lastFeatured} tagsOnTop={true} />
            </section>
        </div>
    </section>
    <section className="container bg-white">
        <div className="row">
            <h1>Recent Posts</h1>         
            <PostGrid posts={recentPosts} />
        </div>
    </section>

    <section className="container">
        <div className="row">          
            <PostMasonry posts={trending} column={3} />
        </div>
    </section>
    </main>
    )
}