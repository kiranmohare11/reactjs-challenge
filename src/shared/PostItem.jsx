import React from "react";
import { Button } from "@material-ui/core";
import Comment from "../components/Comment";

const PostItem = ({ postItem, onViewCommentClick }) => {
    console.log('inside of PostItem ==> ', postItem);
    const showComments =(postItem) => {
        // onViewCommentClick(postItem)
        postItem.showComment = true
    }
    return (
        <div className="userBox">
            <div className="dataBox">
                <div className="basicDetails">
                    <p>Post Id: {postItem.id}</p>
                    <h4>{postItem.title}</h4>
                    <p>{postItem.body}</p>
                </div>
            </div>
            <div className="commentSection">
                <Button color="primary" onClick={()=> showComments(postItem)}>View Comments</Button>
            </div>
            <div>
                <Comment postId={postItem.id} showComment={postItem.showComment}/>
            </div>
        </div>
    );
};

export default PostItem;
