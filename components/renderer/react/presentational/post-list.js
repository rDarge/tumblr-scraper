"use strict";

import React from "react";
import Post from "./post";

class PostList extends React.PureComponent {
    
    constructor(props){
        super(props);
    }

    render(){
        const {props} = this;
        return (
            <div className='height100width100 scroll-box' id='keep-bottom'>
                {props.posts.length > 0 ?
                    props.posts.map((post, index) =>
                        <Post
                            onClick={() => props.handlePostClick(index, props.clickedPostIndex)}
                            onLoad={props.onLoad}
                            key={index}
                            index={index}
                            {...post}
                        />
                    )
                :
                    <div className='height100width100 notfound'></div>
                }
            </div>
        );
    }
}

export default PostList;