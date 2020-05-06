import React, {Component} from "react";
import posts from "./posts";

export default function PostComp (){
        return(
            <div className="postSection">
                <p className="title" >This is my blog</p>
                {posts.map((post) =>(
                    <div className="post">
                        <label className="post-title">{post.title}
                        <img  className = "postImg" src = {require("./x checkbox.png")}/></label>
                        <p dangerouslySetInnerHTML={{__html: post.content}}></p>

                        <div className="post-footer">
                            <span>{post.date}</span>
                            <span> </span>
                            <span>by {post.author}</span>
                        </div>
                    </div>
                    )
                )}
            </div>
        );

}