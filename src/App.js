import React from 'react';
import './App.css';
import { NavBar, HeroText, HeroImg, MyWorkSection, SkillsSection, ContactMe } from './Components';
import { Container, Grid } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <div className="heroSection">
        <NavBar />
        <div className="mainSection">
          <Container maxWidth="md">
            <Grid container >
              <Grid item md={6} xs={12}>
                <HeroText />
              </Grid>
              <Grid item md={6} className="heroImg">
                <HeroImg />
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <SkillsSection />
      <MyWorkSection />
      <ContactMe />
    </div >
  );
}

export default App;
