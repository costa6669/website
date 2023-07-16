import React, { useState } from 'react';
import styled from 'styled-components';

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  background-color: #fff;
  border: 2px solid #000;
  z-index: 3;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 5px;
  width: 80%;
`;

const SubmitButton = styled.button`
  padding: 5px 10px;
  margin-top: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const NewsletterPopup = ({ onClose }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting email: ${email}`);
    setEmail('');
    // Perform any necessary form submission logic here
  };

  return (
    <Popup>
      <CloseButton onClick={onClose}>X</CloseButton>
      <NewsletterForm onSubmit={handleSubmit}>
        <Label>
          Email:
          <Input type="email" value={email} onChange={handleEmailChange} />
        </Label>
        <SubmitButton type="submit">Subscribe</SubmitButton>
      </NewsletterForm>
    </Popup>
  );
};

export default NewsletterPopup;
