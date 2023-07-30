import React from 'react'
import styled from "styled-components";
import BackgroudImage from '../components/BackgroudImage';
import Header from '../components/Header'
export default function SignUp() {
  return (
       <Container>
      <BackgroudImage/>
      <Header/>
      <div className="body flex column a-center j-center">
          <div className="text flex column">
              <h1>Unlimited Movies,Tv shows, and more</h1>
              <h4>Watch anywhere,Cancel anytime</h4>
              <h6>Ready to watch?Enter Your email to create or restart membership</h6>
          </div>
          <div className="form">
              <input type="email" placeholder='Enter email' name='email' />
              <input type="password" name="password" id="" placeholder='enter password' />
              <button>Get Started</button>
          </div>
            <button>LogIn</button>
      </div>
    </Container>
  )
}
const Container = styled.div``;