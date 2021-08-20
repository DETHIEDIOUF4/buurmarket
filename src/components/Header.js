import React from 'react'
import logo from '../../src/logo-b-w.png'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import './Styles/styleNavbar.css'

const Header = () => {
    return (
        <>
         <Navbar className="color-nav" variant="dark"  collapseOnSelect expand="lg" sticky="top" >
            <Container>
                    <Navbar.Brand style={{marginRight:160}} href="/">
                        <img src={logo} width="" height="30" alt="Buurmarkets"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav"  style={{justifyContent:'center',}} >
                <Nav className="me-auto">
                <Nav.Link style={{marginRight:50 ,fontWeight:'bold'}} href="/home">Trade</Nav.Link>
                <Nav.Link style={{marginRight:50 ,fontWeight:'bold'}} href="/service">Produit</Nav.Link>
             <Nav.Link style={{marginRight:50 , fontWeight:'bold'}} href="/about">CopyPortfolio</Nav.Link>
             <Nav.Link style={{marginRight:50 ,fontWeight:'bold'}} href="/file">Actualités</Nav.Link>
             <Nav.Link style={{ fontWeight:'bold'}} href="/file">Société</Nav.Link>
             </Nav>
                        <Button variant="primary">Se connecter</Button>
                        </Navbar.Collapse>   
            </Container>
                
            </Navbar>
            
        </>    
       
    )
}

export default Header