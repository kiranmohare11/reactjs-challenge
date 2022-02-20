import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ userItem }) => {
  return (
    <div className="userBox">
      <div className="dataBox">
        <div className="basicDetails">
          <h4>{userItem.name}</h4>
          <p>{userItem.username}</p>
          <p className="emailId">{userItem.email}</p>
        </div>
        <div className="address">
          <p>
            <b className="boldText">street:</b> {userItem.address.street}
          </p>
          <p>
            <b className="boldText">suite:</b> {userItem.address.suite}
          </p>
          <p>
            <b className="boldText">city:</b> {userItem.address.city}
          </p>
          <p>
            <b className="boldText">zipcode:</b> {userItem.address.zipcode}
          </p>
        </div>
        <div className="phone">
          <p>{userItem.phone}</p>
          <p>
            <a href={userItem.website}>{userItem.website}</a>
          </p>
        </div>
        <div className="companyDetails">
          <p>{userItem.company.name}</p>
          <p>{userItem.company.catchPhrase}</p>
          <p>{userItem.company.bs}</p>
        </div>
        <p>
            <Link className="home-links" to={`${'/posts/'}${userItem.id}`}>Posts</Link>
        </p>
      </div>
    </div>
  );
};

export default UserItem;
