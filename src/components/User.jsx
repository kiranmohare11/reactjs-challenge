import React, { useEffect, useState } from "react";
import UserItem from "../shared/UserItem";
import { getUsers } from "../utilities/userApi";

const User = () => {
  const [isLoading, setLoading] = useState(true);
  const [userList, setUserList] = useState();
  const [foundUserList, setfoundUserList] = useState();
  const [name, setName] = useState('');

  useEffect(() => {
    getUsers()
      .then((response) => {
        console.log(response);
        const { status, data } = response;
        if (status === 200) {
          setfoundUserList(data);
          setUserList(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  const onFilter = (event) => {
    const { value } = event.target
    if (value && value.trim() !== '') {
      const results = foundUserList.filter((user) => {
        return (user.username.toLowerCase().startsWith(value.toLowerCase()) || user.name.toLowerCase().startsWith(value.toLowerCase()))
      });
      setUserList(results)
    } else {
      setUserList(foundUserList)
    }
    setName(value);
  }
  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      {
        <div className="searchBox">
          <label htmlFor="searchItem" className="searchLabel">
            Search
          </label>
          <input placeholder="Filter" value={name} type="text" id="searchItem" onChange={onFilter}/>
        </div>
      }
      { userList.length > 0 ? (
        userList.map((item) => <UserItem userItem={item} key={item.id} />)
      ) : (
        <>
          <h3>No users found</h3>
        </>
      )}
    </div>
  );
};

export default User;
