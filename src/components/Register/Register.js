// Utilities
import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Form, FormGroup, Label, Input, Button, Card } from "reactstrap";
import { useAuth } from "../../common/Auth/Auth";

function Register({ onRouteChange, loadUser }) {
	// useState
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const onNameChange = (event) => {
		setName(event.target.value);
	};

	const onEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const onPasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const auth = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const redirectPath = location.state?.path || "/dashboard";

	const handleRegister = (event) => {
		event.preventDefault();
		auth.register(name, email, password);
		navigate(redirectPath, { replace: true });
	};

	return (
		<>
			<div className='flex justify-center'>
				<Card className='mt-20 w-11/12 max-w-2xl shadow-2xl'>
					<p className='text-4xl mt-4'>Register</p>
					<Form id='sign_up' inline className='w-11/12 mx-auto mt-4'>
						<FormGroup className='mb-2 me-sm-2 mb-sm-0'>
							<Label className='me-sm-2' for='name'>
								Name
							</Label>
							<Input
								id='name'
								name='name'
								placeholder='Your Name'
								type='text'
								onChange={onNameChange}
							/>
						</FormGroup>
						<FormGroup className='mb-2 me-sm-2 mb-sm-0'>
							<Label className='me-sm-2' for='email-adress'>
								Email
							</Label>
							<Input
								id='email-address'
								name='email-address'
								placeholder='example@gmail.com'
								type='email'
								onChange={onEmailChange}
							/>
						</FormGroup>
						<FormGroup className='mb-2 me-sm-2 mb-sm-0'>
							<Label className='me-sm-2' for='password'>
								Password
							</Label>
							<Input
								id='password'
								name='password'
								placeholder="don't tell!"
								type='password'
								onChange={onPasswordChange}
							/>
						</FormGroup>
						<div className='flex-col flex justify-between items-center'>
							<Button
								className='mt-4 bg-gray-700 text-black	w-24 mb-4'
								onClick={handleRegister}
								type='submit'
								value='Register'>
								Register
							</Button>
						</div>
					</Form>
				</Card>
			</div>
		</>
	);
}

export default Register;
