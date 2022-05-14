import React, { useEffect, useState } from 'react'
import Table from './Table'
import { collection, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { db } from '../../config/firebase';

export default function ViewCourses() {

    const [myCourses, setMyCourses] = useState([])

    const getUsers = async() => {
        const courses = []
        const q = query(collection(db, "course"));
        const querySnapshot = await getDocs(q);
        try {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                
                courses.push(doc.data())
                setMyCourses(courses)
            });
            console.log(myCourses)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])



    return (
        <div>
            <div className="nav">
                <a href="/">
                    <img src="/images/login-logo.png" />
                </a>
            </div>
            <h1 style={{
                textAlign: "center",
                marginTop: "60px",
                fontSize: "50px",
                color: "#0873b9"
            }}>
                Course Updates
            </h1>
            <div style={{
                width: "1128px",
                margin: "0 auto"
            }}>
                <Table myData = {myCourses} />
            </div>

        </div>
    )
}
