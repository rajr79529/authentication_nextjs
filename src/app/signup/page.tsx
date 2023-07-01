"use client"; //it can use frontend functionality
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignupPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSignup = () => {};
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
        <h1 style={{ fontSize: "50px" }}>Signup</h1>
        <hr />
        <br />
        <label htmlFor="name">Username: </label>
        <input
          type="text"
          id="name"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="enter username"
          style={{
            backgroundColor: "#29374D",
            marginLeft: "6px",
            padding: "2px",
            borderRadius: "4px",
          }}
        />
        <br />
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
          onClick={onSignup}
        >
          Signup
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
          href="/login"
        >
          Visit Login
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
