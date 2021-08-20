import React from 'react'
import logo from '../../src/logo-b-w.png'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import './Styles/styleNavbar.css'

const Header = () => {
    return (
        <>
         <Navbar className="color-nav" variant="dark"  collapseOnSelect fixed='top' expand='lg' >
            <Container>
                    <Navbar.Brand style={{marginRight:200}} href="/">
                        <img src={logo} width="" height="30" alt="Buurmarkets"/>
            </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link style={{marginRight:45 ,fontWeight:'bold'}} href="/home">Trade</Nav.Link>
                <Nav.Link style={{marginRight:45 ,fontWeight:'bold'}} href="/service">Produit</Nav.Link>
             <Nav.Link style={{marginRight:45 , fontWeight:'bold'}} href="/about">CopyPortfolio</Nav.Link>
             <Nav.Link style={{marginRight:45 ,fontWeight:'bold'}} href="/file">Actualités</Nav.Link>
             <Nav.Link style={{marginRight:45 , fontWeight:'bold'}} href="/file">Société</Nav.Link>
             </Nav>
            <Button variant="primary">Se connecter</Button>
            </Container>
                
            </Navbar>
            <br />
            <br />
            <br />
        </>    
       
    )
}

export default Header