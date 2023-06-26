import React, { useState, useEffect } from "react";
import axios from "axios";

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.error);
      });
  }, []);

  return (
    <div>
      <h2>FriendList</h2>
      <ul>
        <li>Name - age - email</li>
        <li>Name - age - email</li>
        <li>Name - age - email</li>
        <li>Name - age - email</li>
      </ul>
    </div>
  );
};

export default FriendList;
