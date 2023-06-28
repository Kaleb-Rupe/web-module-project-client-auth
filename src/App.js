import React from "react";
import "./App.css";
import { Routes, Route, Navigate, Link } from "react-router-dom";

import Login from "./components/Login";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import Logout from "./components/Logout";

// import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <header>
        <h2>Friends Database</h2>
        <Link className="link" to="login">
          Login.
        </Link>
        <Link className="link" to="friends">
          FriendList.
        </Link>
        <Link className="link" to="/friends/add">
          AddFriend.
        </Link>
        <Link className="link" to="/logout">
          Logout
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Navigate to="/" />} />
        <Route
          path="/friends"
          element={
            <PrivateRoute redirectTo="/login">
              <FriendList />
            </PrivateRoute>
          }
        />
        <Route
          path="/friends/add"
          element={
            <PrivateRoute redirectTo="/login">
              <AddFriend />
            </PrivateRoute>
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

const PrivateRoute = ({ children, redirectTo }) => {
  let isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default App;
