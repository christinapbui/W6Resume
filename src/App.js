import React, {useState} from 'react';
import './App.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home.js';
import Resume from './pages/Resume.js'
import Portfolio from './pages/Portfolio.js'
import AboutMe from './pages/AboutMe.js'

function App() {
  let [navArray, setNavArray]=useState([{name:'Home', selected:false, path:"/"},{name:'About Me',selected:false,path:"/about"},{name:'Resume',selected:false,path:"/resume"},{name:'Portfolio',selected:false,path:"/portfolio"}])

  const changeTabColor = (index) => {
    let array  = navArray.map((item,idx) => {
      if (idx === index) {
        item.selected = true
      }else {
        item.selected = false
      }
      return item 
    } )
    setNavArray([...array])
  }

  return (
    <div className="App">
      <>
      <div className="navigation">
        <Navbar bg="dark" variant="dark" fixed="top">
          <Nav className="mr-auto">
            {navArray.map((item,index) =>{
              if(item.selected ===  true){
                return <Link className="navbar-link-clicked" to={item.path} onClick={()=>changeTabColor(index)}>{item.name}</Link>
              }else{
                return <Link className="navbar-link" to={item.path} onClick={()=>changeTabColor(index)}>{item.name}</Link>
              }
            })}
            {/* <Link className="navbar-link" to="/" onClick={()=>changeTabColor(0)}>Home</Link>
            <Link className="navbar-link" to="/about" onClick={()=>changeTabColor()}>About Me</Link>
            <Link className="navbar-link" to="/resume" onClick={()=>changeTabColor()}>Resume</Link>
            <Link className="navbar-link" to="portfolio" onClick={()=>changeTabColor()}>Portfolio</Link> */}
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form> */}
        </Navbar>
      </div>
      </>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={AboutMe}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
