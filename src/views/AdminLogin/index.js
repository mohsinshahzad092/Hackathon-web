import React, { useState } from 'react'
import styled from 'styled-components'
import './auth.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
    faUser,
    faEnvelope,
    faGlobeAmericas,
    faMapMarkerAlt,
    faLock,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { auth, db, storage } from '../../config/firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";



export default function AdminLogin() {
    let navigate = useNavigate();

    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [password, setPassword] = useState("")


    const submitHandeler = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, userEmail, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate(`/admindashboard`)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }



    return (
        <div>
            <div className="nav">
                <a href="/">
                    <img src="/images/login-logo.png" />
                </a>
                <div>
                    <Link to="" className="join">
                        SignUp
                    </Link>
                    <Link to="" className="signin">
                        SignIn
                    </Link>
                </div>
            </div>
            <section className="auth-wrapper register-wrapper">
                <form className="auth-form" onSubmit={submitHandeler}>
                    <h3>Get your free account</h3>
                    <div className="input-box">
                        <FontAwesomeIcon icon={faUser} />
                        <input
                            type="text"
                            placeholder="Username"
                            name="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="userEmail"
                            onChange={(e) => setUserEmail(e.target.value)}
                            value={userEmail}
                        />
                    </div>
                    <div className="input-box">
                        <FontAwesomeIcon icon={faLock} />
                        <input
                            type="password"
                            placeholder="Password"
                            name="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <button>Login</button>
                </form>
            </section>

        </div>
    )
}

