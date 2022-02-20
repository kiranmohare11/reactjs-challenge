import React from "react";

const CommentItem = ({ commentItem }) => {
    console.log('inside of commentItem ==> ', commentItem);
    return (
        <div className="userBox">
            <div className="dataBox">
                <div className="basicDetails">
                    <h4>{commentItem.name}</h4>
                    <p>{commentItem.email}</p>
                    <p>{commentItem.body}</p>
                </div>
            </div>
        </div>
    );
};

export default CommentItem;
