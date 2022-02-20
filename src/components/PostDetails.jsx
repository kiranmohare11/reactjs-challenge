import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostComments } from "../utilities/postApi";

const PostDetails = () => {
    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [postList, setPostList] = useState();

    useEffect(() => {
        fetchPostComment()
    }, [id])

    const fetchPostComment = () => {
        getPostComments()
        .then((response) => {
            console.log('getPostComments ', response);
            const { status, data } = response;
            if (status === 200) {
                setPostList(data);
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
            
        </div>
    );
}

export default PostDetails;