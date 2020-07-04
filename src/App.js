import React from 'react';
import './App.css';
import { NavBar, HeroText, HeroImg, MyWorkSection, SkillsSection, ContactMe } from './Components';
import { Container, Grid } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

const HomePage = () => (
  <Container Container maxWidth="md" >
    <Grid container >
      <Grid item md={6} xs={12}>
        <HeroText />
      </Grid>
      <Grid item md={6} className="heroImg">
        <HeroImg />
      </Grid>
    </Grid>
  </Container >
)

function App() {
  return (
    <div className="App">
      <div className="heroSection">
        <Router>
          <NavBar />
          <div className="mainSection">
            <Switch>
              <Route exact path="/" component={withRouter(HomePage)} />
              <Route exact path="/skills" component={withRouter(SkillsSection)} />
              <Route exact path="/work" component={withRouter(MyWorkSection)} />
              <Route exact path="/contact" component={withRouter(ContactMe)} />
            </Switch>
          </div>
        </Router>
      </div>
    </div >
  );
}

export default App;
