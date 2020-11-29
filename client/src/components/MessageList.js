import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const getMessages = gql`
  {
    messages {
      _id
      title
      content
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

const GroupList = styled.ul`
  width: 600px;
  max-width: 100%;
  padding: 1rem;
  font-size: 1rem;
  list-style: none;
  background: #fff;
  border-radius: 0.3rem;
  box-shadow: 0 2px 1px rgb(0, 0, 0, 0.1);
`;

const List = styled.li`
  display: inline-block;
  padding: 0.5rem 1rem;
  transition: all 0.4s;
  cursor: pointer;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  display: block;
  font-size: 1rem;
  color: #000;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Message = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.7rem;
  color: #545454;
  font-weight: 300;
`;

const Author = styled.small`
  color: #0066ff;
  background: #e6f0ff;
  border-radius: 0.4rem;
  padding: 0.3rem 0.6rem;
  font-weight: 400;
  font-size: 0.7rem;
  font-style: italic;
`;

const MessageList = () => {
  const { loading, error, data } = useQuery(getMessages);

  if (error) return <div>Error</div>;

  return (
    <>
      <Header>Lista de mensages:</Header>
      {loading ? (
        <div>Loading..</div>
      ) : (
        <GroupList>
          {data.messages.map(({ _id, title, content, author }) => {
            return (
              <List key={_id}>
                <Title>{title}</Title>
                <Message>{content}</Message>
                <Author>{author}</Author>
              </List>
            );
          })}
        </GroupList>
      )}
    </>
  );
};

export default MessageList;
