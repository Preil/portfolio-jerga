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
      <a className="nav-link">{title}</a>
    </Link>
  )


}

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Ilya Preil</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

            <NavItem>
              <BsNavLink route="/" title="Home"/>
            </NavItem>
            <NavItem>
              <BsNavLink route="/about" title="About"/>
            </NavItem>
            <NavItem>
              <BsNavLink route="/portfolios" title="Portfolios"/>
            </NavItem>
            <NavItem>
              <BsNavLink route="/blogs" title="Blogs"/>
            </NavItem>
            <NavItem>
              <BsNavLink route="/cv" title="CV"/>
            </NavItem>

          </Nav>
          <NavbarText>Simple Text</NavbarText>
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