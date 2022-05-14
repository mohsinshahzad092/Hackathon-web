import { faEye, faGraduationCap, faIdCard, faKey, faSchool, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './adminDashboard.scss'
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from '../../config/firebase'
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";
import { Button, Modal } from 'react-bootstrap'

export default function AdminDashboard() {
    let navigate = useNavigate();

    const [resetShow, setShow] = useState(false);
    const [adminShow, setAdminShow] = useState(false);
    const [courseShow, setCourseShow] = useState(false);
    const resetHandleClose = () => setShow(false);
    const adminHandleClose = () => setAdminShow(false);
    const courseHandleClose = () => setCourseShow(false);
    const handleReset = () => setShow(true);
    const handleAdmin = () => setAdminShow(true);
    const handleCourse = () => setCourseShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPasswordd, setNewPassword] = useState("");

    const [newAdminEmail, setNewAdminEmail] = useState("");
    const [newAdminPassword, setNewAdminPassword] = useState("");

    const [courseName, setCourseName] = useState("");
    const [courseDuration, setCourseDuration] = useState("");
    const [courseOutline, setCourseOutline] = useState("");


    const logoutHandler = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate(`/adminlogin`)

        }).catch((error) => {
            // An error happened.
        });
    }

    const resetHandler = () => {
        console.log("clicked")
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                const userNew = auth.currentUser;
                const newPassword = newPasswordd;

                updatePassword(userNew, newPassword).then(() => {
                    // Update successful.
                    toast("password changed successfully")
                }).catch((error) => {
                    console.log(error)
                    // An error ocurred
                    // ...
                });

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.code, error.message)
                toast.error("credential are incorrect")
            });

    }
    const adminHandler = () => {
        createUserWithEmailAndPassword(auth, newAdminEmail, newAdminPassword)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                toast("New User Created")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                toast.error("Credentials incorrect")
                // ..
            });
    }
    const courseHandler = async () => {
        if (!courseName || !courseDuration || !courseOutline) {
            return (
                toast.error("Empty fields")
            )
        }
        console.log("clicked")
        // Add a new document with a generated id.
        var id = new Date().getTime().toString();
        try {
            await setDoc(doc(db, "course", id), {
                courseName: courseName,
                courseDuration: courseDuration,
                courseOutline: courseOutline,
                enable: true,
                id: id,
                courseStatus: "Course Open"
            });
            toast("Course added successfully")
        } catch (error) {
            console.log(error)
        }


    }


    return (
        <div>
            <ToastContainer />
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

            {/* Reset Password */}
            <Modal show={resetShow} onHide={resetHandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reset Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title>Type your email address</Modal.Title>
                    <input style={{
                        width: "100%"
                    }} placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Modal.Body>

                <Modal.Body>
                    <Modal.Title>Type your current Password</Modal.Title>
                    <input style={{
                        width: "100%"
                    }} placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </Modal.Body>
                <Modal.Body>
                    <Modal.Title>Type your new Password</Modal.Title>
                    <input style={{
                        width: "100%"
                    }} placeholder='new password' value={newPasswordd} onChange={(e) => setNewPassword(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={resetHandleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={resetHandler}>
                        Reset Password
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal show={adminShow} onHide={adminHandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title>Email of Admin</Modal.Title>
                    <input style={{
                        width: "100%"
                    }} placeholder='email' value={newAdminEmail} onChange={(e) => setNewAdminEmail(e.target.value)} />
                </Modal.Body>
                <Modal.Body>
                    <Modal.Title>Password for Admin</Modal.Title>
                    <input style={{
                        width: "100%"
                    }} placeholder='password' value={newAdminPassword} onChange={(e) => setNewAdminPassword(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={adminHandleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={adminHandler}>
                        Add Admin
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal show={courseShow} onHide={courseHandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Course Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title>Course Name</Modal.Title>
                    <input style={{
                        width: "100%"
                    }} placeholder='Course Name' value={courseName} onChange={(e) => setCourseName(e.target.value)} />
                </Modal.Body>
                {/* Course Status */}
                <Modal.Body>
                    <Modal.Title>Course Duration</Modal.Title>
                    <input style={{
                        width: "100%"
                    }} placeholder='Course Duration' value={courseDuration} onChange={(e) => setCourseDuration(e.target.value)} />
                </Modal.Body>
                <Modal.Body>
                    <Modal.Title>Course Outline</Modal.Title>
                    <input style={{
                        width: "100%"
                    }} placeholder='Course Outline' value={courseOutline} onChange={(e) => setCourseOutline(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={courseHandleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={courseHandler}>
                        Add Course
                    </Button>
                </Modal.Footer>
            </Modal>

            <h1 style={{
                textAlign: "center",
                marginTop: "100px",
                fontSize: "50px",
                color: "#0873b9"
            }}>
                Admin Dashboard
            </h1>
            <div style={{
                backgroundColor: "#46A81A",
                color: "white",
                height: "150px"

            }}>
                <div style={{
                    maxWidth: "1128px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "0 auto",
                    fontSize: "18px"

                }}>

                    <div style={{
                        textAlign: "center",
                        margin: "20px",
                        flex: "1",
                        cursor: "pointer"
                    }}
                        onClick={handleReset}>

                        <FontAwesomeIcon icon={faKey} size="xl" />
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
                        cursor: "pointer"

                    }}
                        onClick={handleAdmin}
                    >
                        <FontAwesomeIcon icon={faUser} size="xl" />
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
                        <FontAwesomeIcon icon={faIdCard} size="xl" />
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
                        <FontAwesomeIcon icon={faSchool} size="xl" />
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
                        cursor: "pointer"
                    }}
                        onClick={handleCourse}>
                        <FontAwesomeIcon icon={faGraduationCap} size="xl" />
                        <div style={{
                            marginTop: "15px",
                            fontSize: "20px"
                        }}>
                            Add New Course
                        </div>
                    </div>
                    <div style={{
                        textAlign: "center",
                        margin: "20px",
                        flex: "1",
                        cursor: "pointer"

                    }}>
                        <Link to="/AdminCoursesView" style={{
                            textDecoration: "none",
                            color: "white"
                        }}>
                            <FontAwesomeIcon icon={faEye} size="xl" />
                            <div style={{
                                marginTop: "15px",
                                fontSize: "20px"
                            }}>
                                View All Courses
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
