import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import styled, { createGlobalStyle } from "styled-components";

import Navbar from "./components/Navbar";
import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
   *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Quicksand', sans-serif;
   }

   body{
    font-family: 'Quicksand', sans-serif;
    background: #fafafa;
   }

   a{
     text-decoration: none;
     color: #000;
   }
`;

const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: auto;
  padding: 1rem;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar logo={logo} />
      <Container>
        <Switch>
          <Route exact path="/" component={MessageList} />
          <Route exact path="/new-message" component={MessageForm} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
