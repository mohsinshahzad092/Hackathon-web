import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import './home.scss'

function Login() {
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
            <div className="section">
                <div className="hero">
                    <h1>Want to View New Courses ? Click Below</h1>
                    <div>
                        <Link to="/viewcourses">
                            <img src="/images/viewCourses.png" />
                        </Link>
                    </div>
                </div>
                <div className="feedSection">
                    <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId' width='340' height='500' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowfullscreen='true' allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'></iframe>" }} />
                </div>
            </div>
        </div>
    )
}

export default Login;