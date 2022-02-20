import React, { useEffect, useState } from "react";
import CommentItem from "../shared/CommentItem";
import { getPostComments } from "../utilities/postApi";

const Comment = ({postId, showComment}) => {
    const [isLoading, setLoading] = useState(true);
    const [commentList, setCommentList] = useState();

    useEffect(() => {
        if (showComment) {
            fetchPostComment()
        }
    }, [postId, showComment])

    const fetchPostComment = () => {
        getPostComments(postId)
        .then((response) => {
            console.log('getPostComments ', response);
            const { status, data } = response;
            if (status === 200) {
                setCommentList(data);
            }
            setLoading(false);
        })
        .catch((error) => {
            setLoading(false);
            console.log(error);
        });
    }
    if (isLoading) {
        return <h3>Loading...</h3>;
    }
    return (
        <div>
             { commentList.length > 0 ? (
                commentList.map((item) => <CommentItem commentItem={item} key={item.id} />)
            ) : (
                <>
                    <h3>No comment found</h3>
                </>
            )}
        </div>
    );
}

export default Comment;