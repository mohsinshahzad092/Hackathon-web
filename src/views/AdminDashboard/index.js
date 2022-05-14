import { faGraduationCap, faIdCard, faKey, faSchool, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './adminDashboard.scss'
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from '../../config/firebase'
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";

export default function AdminDashboard() {
    let navigate = useNavigate();

    const logoutHandler = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate(`/adminlogin`)

        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div>
            <div className="nav">
                <a href="/">
                    <img src="/images/login-logo.png" />
                </a>
                <div>
                    <div className="logout" onClick={logoutHandler}>
                        Logout
                    </div>
                </div>
            </div>

            <h1 style={{
                textAlign: "center",
                marginTop: "100px",
                fontSize: "50px",
                color: "#0873b9"
            }}>
                Admin Dashboard
            </h1>
            <div style={{
                backgroundColor: "#e0e0e0",
                color: "#003f68"

            }}>
                <div style={{
                    maxWidth: "1128px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "0 auto",
                }}>

                    <div style={{
                        textAlign: "center",
                        margin: "20px",
                        flex: "1",
                    }}>
                        <FontAwesomeIcon icon={faKey} size="2xl" />
                        <div style={{
                            marginTop: "15px",
                            fontSize: "20px"
                        }}>
                            Reset Password
                        </div>
                    </div>
                    <div style={{
                        textAlign: "center",
                        margin: "20px",
                        flex: "1",
                    }}>
                        <FontAwesomeIcon icon={faUser} size="2xl" />
                        <div style={{
                            marginTop: "15px",
                            fontSize: "20px"
                        }}>
                            Want to Add Another Admin
                        </div>
                    </div>
                    <div style={{
                        textAlign: "center",
                        margin: "20px",
                        flex: "1",
                    }}>
                        <FontAwesomeIcon icon={faIdCard} size="2xl" />
                        <div style={{
                            marginTop: "15px",
                            fontSize: "20px"
                        }}>
                            Add Users
                        </div>
                    </div>
                    <div style={{
                        textAlign: "center",
                        margin: "20px",
                        flex: "1",
                    }}>
                        <FontAwesomeIcon icon={faSchool} size="2xl" />
                        <div style={{
                            marginTop: "15px",
                            fontSize: "20px"
                        }}>
                            Students Status
                        </div>
                    </div>
                    <div style={{
                        textAlign: "center",
                        margin: "20px",
                        flex: "1",
                    }}>
                        <FontAwesomeIcon icon={faGraduationCap} size="2xl" />
                        <div style={{
                            marginTop: "15px",
                            fontSize: "20px"
                        }}>
                            Course status
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
