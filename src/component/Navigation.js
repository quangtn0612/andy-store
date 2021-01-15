import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.css';
import { Navbar ,Container, Row, Col, NavItem } from 'reactstrap';
import { DataContext } from '../context/DataContext';

export default class Navigation extends Component{

  render(){

    return <Container>
    <div className="NavBar">
      
      <NavLink to="/passport"activeClassName="active" className="text">PASSPORT COVER</NavLink>
      <NavLink to="/wallet"activeClassName="active" className="text">WALLET</NavLink>
    
    </div>
    </Container>
  }
 
     

}