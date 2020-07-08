import React from "react";

export default function Signup() {
  return (
    <div>
      <form>
        <h1>Sign Up</h1>
        <br></br>
        <label>Name: </label>
        <input name="name" />
        <br></br>
        <label>Password: </label>
        <input name="password" />
        <br></br>
        <input type="submit" />
      </form>
    </div>
  );
}
