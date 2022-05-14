import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/login-logo.png" />
                </a>
                <div>
                    <Join>
                        SignUp
                    </Join>
                    <Signin>
                        SignIn
                    </Signin>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Want to View New Courses ? Click Below</h1>
                    <div>
                        <img src="/images/viewCourses.png" />
                    </div>
                </Hero>
                <FeedSection>
                    <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId' width='340' height='500' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowfullscreen='true' allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'></iframe>" }} />
                </FeedSection>
            </Section>
        </Container>
    )
}

export default Login;

const Container = styled.div`

`
const Nav = styled.div`
    max-width: 1128px;
    margin: auto;;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content : space-between;
    flex-wrap: no-wrap;


    & > a {                     //it means anything inside a tag
        width: 135px;
        height: 34px;

        @media(max-width: 768px) {
            padding: 0 5px;
        }
    }   


`

const Google = styled.div`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    width : 100%;
    height: 56px;
    border-radius: 28px;
    box-shadow : inset 0 0 0 1px rgb( 0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 / 0%);
    vertical-align: middle;
    z-index : 0;
    transition-duration: 167ms;
    font-size: 20px;
    color : rgb(0, 0, 0, 0.6);

    &:hover {
        background-color: rgba(207, 207, 207, 0.25);
        color : (0, 0, 0, 0.75)

    }

`




const Form = styled.div`
    margin-top : 100px;
    width: 408px;
    @media(max-width: 768px) {
        margin-top : 20px;

    }

`





const Hero = styled.div`
    flex: 1;
    h1 {
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 200;
        line-height: 70px;
        @media(max-width: 768px) {
            text-align: "center";
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }

    div {
        width: 300px;

        img {
            z-index: -1;
            width : 100%;
            height: : 100%;
            @media(max-width: 768px) {
                top: 230px;=
                width: initial;
                height: initial;
            }
        }
    }


`

const FeedSection = styled.div`
`

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    border-radius: 4px;
    color: rgba(0,0,0,0.6);
    margin-right: 16px;

    &:hover {
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,0.9);
        text-decoration: none;
    }
`
const Signin = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
    &:hover {
        background-color : rgba(112, 181, 249, 0.15);
        color: #0a66c2;
        text-decoration: none;
    }

`

const Section = styled.section`
    display: flex;
    align-content : start;
    min-height : 700px;
    padding-bottom : 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    @media (max-width : 768px) {
        margin: auto;
        min-height: 0px;
    }
`