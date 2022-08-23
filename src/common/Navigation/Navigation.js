// Utilities
import React from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import { useState } from "react";

// Style
import Logo from "../../assets/images/logo.svg";

function Navigation({ onRouteChange, isSignedIn }) {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	if (isSignedIn) {
		return (
			<>
				<Navbar
					color='dark'
					container='md'
					dark
					expand='md'
					fixed='top'
					className='h-14'>
					{/* Logo */}
					<NavbarBrand href='/'>
						<img src={Logo} alt='logo' className='h-10' />
					</NavbarBrand>
					{/* Links */}
					<NavbarToggler onClick={toggle} />
					<Collapse className='bg-dark' isOpen={isOpen} navbar>
						<Nav navbar className='flex-auto justify-end '>
							<NavItem>
								<NavLink
									className='links text-xl underline cursor-pointer'
									onClick={() => onRouteChange("signout")}>
									Sign Out
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</>
		);
	} else {
		return (
			<>
				<Navbar
					color='dark'
					container='md'
					dark
					expand='md'
					fixed='top'
					className='h-14'>
					{/* Logo */}
					<NavbarBrand href='/'>
						<img src={Logo} alt='logo' className='h-10' />
					</NavbarBrand>
					{/* Links */}
					<NavbarToggler onClick={toggle} />
					<Collapse className='bg-dark' isOpen={isOpen} navbar>
						<Nav navbar className='flex-auto justify-end'>
							<NavItem>
								<NavLink
									className='links text-xl underline cursor-pointer'
									onClick={() => onRouteChange("signin")}>
									Sign In
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className='links text-xl underline cursor-pointer'
									onClick={() => onRouteChange("register")}>
									Register
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</>
		);
	}
}

export default Navigation;
