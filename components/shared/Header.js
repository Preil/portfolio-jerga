import React, {useState} from 'react';
import Link from 'next/link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const BsNavLink = (props) => {
  const {route, title} = props;
  return (
    <Link href={route}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  )
}

const Login = () => {
  return (
    <span className="nav-link port-navbar-link clickable">Login</span>
  )
}
const Logout = () => {
  return (
    <span className="nav-link port-navbar-link clickable">Logout</span>
  )
}


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="port-navbar port-default" color="transparent" light expand="md">
        <NavbarBrand className="port-navbar-brand" href="/">Ilya Preil</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>

            <NavItem className="port-navbar-item">
              <BsNavLink route="/" title="Home"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/about" title="About"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/portfolios" title="Portfolios"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/blogs" title="Blogs"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/cv" title="CV"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <Login/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <Logout/>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;


// import React from 'react'
// import Link from 'next/link'
// import {Button} from 'reactstrap'
//
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <Button outline color="primary">
//           <Link href="/">Home</Link>
//         </Button>{' '}
//         <Link href="/about">
//           <a>About </a>
//         </Link>
//         <Link href="/portfolios">
//           <a>Portfolios </a>
//         </Link>
//         <Link href="/blogs">
//           <a>Blogs </a>
//         </Link>
//         <Link href="/cv">
//           <a>CV </a>
//         </Link>
//       </div>
//     )
//   }
// }
//
// export default Header