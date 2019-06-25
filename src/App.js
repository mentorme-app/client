import React from 'react';
import { createGlobalStyle } from 'styled-components'
import './App.css';
import MentorMe from './views/MentorMe';

function App() {
  return (
    <div className="App">
    <GlobalStyles />
        <MentorMe />
    </div>

  );
}

export default App;

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap);
    font-family: 'Noto Sans', sans-serif;
  }
`