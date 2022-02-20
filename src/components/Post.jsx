import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { post } from "../api/api";
import PostItem from "../shared/PostItem";
import { getUserPosts, getPosts } from "../utilities/postApi";

const Post = (props) => {
    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [postList, setPostList] = useState();

    useEffect(() => {
        if (!id) {
            fetchPosts()
        } else {
            fetchUserPosts()
        }
  }, [id]);

    const fetchPosts = () => {
        getPosts()
        .then((response) => {
            console.log('getPosts ', response);
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

    const fetchUserPosts = () => {
        const request = {
            id
        }
        getUserPosts(request)
        .then((response) => {
            console.log('getUserPosts ', response);
            const { status, data } = response;
            if (status === 200) {
                data.map((item) => item.showComment = false)
                setPostList(data);
            }
            setLoading(false);
        })
        .catch((error) => {
            setLoading(false);
            console.log(error);
        });
    }

    const toggleComment = (postItem) => {
        const mPostList = postList
        mPostList.map((post) => {
            if(post.id === postItem.id){
                post.showComment = !post.showComment
            }
        })
        console.log(mPostList);
        setPostList(mPostList)
    }

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  return(
      <div>
          { postList.length > 0 ? (
                postList.map((item) => <PostItem postItem={item} key={item.id} onViewCommentClick={toggleComment}/>)
            ) : (
                <>
                    <h3>No post found</h3>
                </>
            )}
      </div>

  )
}

export default Post;