"use client";

import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react'
import { styled } from 'styled-components'
import Map from './Map';

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`;

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
gap: 50px;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const Title = styled.h1`
font-weight: 200;
`;

const Form = styled.form`
width: 500px;
display: flex;
flex-direction: column;
gap: 25px;
`;

const Input = styled.input`
padding: 20px;
background-color: lightgray;
border-radius: 5px;
border: none;
`;

const TextArea = styled.textarea`
padding: 20px;
border-radius: 5px;
border: none;
background-color: lightgray;
`;

const Button = styled.button`
background-color: darkblue;
color: white;
font-weight: bold;
padding: 20px;
cursor: pointer;
border-radius: 5px;
`;

const Right = styled.div`
flex: 1;
`;

const Contact = () => {


const ref = useRef();
const [success, setSuccess] = useState(false)

const handleSubmit =e=>{
  e.preventDefault()
  
  emailjs.sendForm("service_pr0fdfk", "template_v4yelm9", ref.current, "o0HpokmDMPBrUu6Ir")
  .then((result) => {
      console.log(result.text);
      setSuccess(true)
  }, (error) => {
      console.log(error.text);
      setSuccess(false)
  });
};

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Stationed in Brazil But We Offer Services Worldwide !</Title>
            <Title>Contact Us</Title>
            <Input placeholder='name' name="name" />
            <Input placeholder='email' name="email" />
            <TextArea placeholder='Message' rows={10} name="message"/>
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We`ll be in touch soon! :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  )
}

export default Contact