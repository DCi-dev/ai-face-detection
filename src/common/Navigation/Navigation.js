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
import { useAuth } from "../Auth/Auth";

function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const auth = useAuth();
	const handleLogout = () => {
		auth.logout();
	};

	return auth.user ? (
		<>
			<Navbar
				color='dark'
				container='md'
				dark
				expand='md'
				fixed='top'
				className='h-14'>
				{/* Logo */}
				<NavbarBrand>
					<img src={Logo} alt='logo' className='h-10' />
				</NavbarBrand>
				{/* Links */}
				<NavbarToggler onClick={toggle} />
				<Collapse className='bg-dark' isOpen={isOpen} navbar>
					<Nav navbar className='flex-auto justify-end'>
						{/* <NavItem>
							<NavLink
								className='links text-xl underline cursor-pointer'
								href='dashboard'>
								Dashboard
							</NavLink>
						</NavItem> */}
						<NavItem>
							<NavLink
								className='links text-xl underline cursor-pointer'
								href='signin'
								onClick={handleLogout}>
								Logout
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</>
	) : (
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
								href='signin'>
								Sign In
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className='links text-xl underline cursor-pointer'
								href='register'>
								Register
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</>
	);
}

export default Navigation;
