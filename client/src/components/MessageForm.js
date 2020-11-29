import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const CREATE_MESSAGE = gql`
  mutation CreateMessage($title: String!, $content: String!, $author: String!) {
    createMessage(title: $title, content: $content, author: $author) {
      author
    }
  }
`;

const Header = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  color: #000000;
  font-size: 1rem;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  font-weight: 900;
`;

const Form = styled.form`
  width: 500px;
  max-width: 100%;
  padding: 1rem;
  background: #fff;
  border-radius: 0.3rem;
  box-shadow: 0 2px 1px rgb(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.7rem;
`;
const Label = styled.label`
  font-size: 0.8rem;
  color: #000;
  margin-bottom: 0.3rem;
`;
const FormControl = styled.input`
  width: 100%;
  height: ${({ text }) => (text ? "100px" : "35px")};
  border-radius: 0.1rem;
  padding: 0.5rem;
  outline: none;
  border: 1px solid #f2f2f2;
  &:focus {
    border: 1px solid #0066ff;
  }
`;
const Button = styled.button`
  display: block;
  width: 100%;
  height: 35px;
  padding: 0 1rem;
  border-radius: 0.2rem;
  outline: none;
  border: none;
  background: ${({ disabled }) => (disabled ? "#fafafa" : "#0066ff")};
  color: ${({ disabled }) => (disabled ? "#ccc" : "#fff")};
  cursor: ${({ disabled }) => (disabled ? "no-drop" : "pointer")};
`;

const MessageForm = () => {
  const [message, setMessage] = useState(null);
  const [createMessage] = useMutation(CREATE_MESSAGE);
  const [disabled, setDisabled] = useState(false);
  const route = useHistory();

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setDisabled(true);
    await createMessage({ variables: message });
    setDisabled(false);
    route.push("/");
  };
  return (
    <>
      <Header>Agrega una nuevo mensage:</Header>
      <Form onSubmit={handleSave}>
        <FormGroup>
          <Label>Title</Label>
          <FormControl type="text" name="title" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Content</Label>
          <FormControl
            as="textarea"
            name="content"
            text
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Author</Label>
          <FormControl type="text" name="author" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Button type="submit" disabled={disabled ? true : false}>
            {disabled ? "..." : "Save Message"}
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default MessageForm;
