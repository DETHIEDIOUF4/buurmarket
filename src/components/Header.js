import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import './Styles/styleNavbar.css'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
    return (
        <>
         <Navbar className="color-nav" variant="dark"  collapseOnSelect fixed='top' expand='lg' >
            <Container>
            <Navbar.Brand className="navbar-brand" href="/">Home</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/home">Trade</Nav.Link>
            <Nav.Link href="/service">Produit</Nav.Link>
             <Nav.Link href="/about">CopyPortfolio</Nav.Link>
                        <Nav.Link href="/file">Actualités</Nav.Link>
                        <Nav.Link href="/file">Société</Nav.Link>
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