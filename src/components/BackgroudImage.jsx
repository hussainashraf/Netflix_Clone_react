import React from "react";
import background from '../assets/login.jpg'
import styled from 'styled-components'

export default function BackgroudImage() {
  return (
    <Container>
        <img src={background} alt="" />
    </Container>
  )
}

const Container = styled.div``;

