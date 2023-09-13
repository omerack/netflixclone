import React, { useState } from "react";
import "./LoginScreen.css";
import { auth, googleProvider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email);

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const Logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-form">
      <h2>Email</h2>
      <input onChange={(e) => setEmail(e.target.value)} />
      <h2>Password</h2>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button className="btn" onClick={signIn}>
        Submit
      </button>

      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <button onClick={Logout}>Logout</button>
    </div>
  );
}

export default SignUp;
