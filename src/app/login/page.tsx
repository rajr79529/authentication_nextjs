"use client"; // declaring it as client module
import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = () => {};
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          border: "2px Solid black",
          height: "50%",
        }}
      >
        <h1 style={{ fontSize: "50px" }}>Login</h1>
        <hr />
        <br />
        <label
          style={{ display: "inline-block", width: "87.33px" }}
          htmlFor="email"
        >
          Email:{" "}
        </label>
        <input
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="enter email"
          style={{
            backgroundColor: "#29374D",
            marginLeft: "6px",
            padding: "2px",
            borderRadius: "4px",
          }}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="enter password"
          style={{
            backgroundColor: "#29374D",
            marginLeft: "6px",
            padding: "2px",
            borderRadius: "4px",
          }}
        />
        <br />
        <br />
        <button
          style={{
            backgroundColor: "green",
            padding: "8px",
            borderRadius: "4px",
            width: "100%",
          }}
          onClick={onLogin}
        >
          Login
        </button>
        <br />
        <br />
        <Link
          style={{
            textAlign: "center",
            display: "inline-block",
            width: "100%",
            textDecoration: "underline",
          }}
          href="/signup"
        >
          Visit Signup
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
