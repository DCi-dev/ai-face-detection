// Utilities
import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Form, FormGroup, Label, Input, Button, Card } from "reactstrap";
import { useAuth } from "../../common/Auth/Auth";

function Signin() {
	const [signInEmail, setSignInEmail] = useState("");
	const [signInPassword, setSignInPassword] = useState("");

	const onEmailChange = (event) => {
		setSignInEmail(event.target.value);
	};
	const onPasswordChange = (event) => {
		setSignInPassword(event.target.value);
	};

	const auth = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const redirectPath = location.state?.path || "/dashboard";

	const handleLogin = (event) => {
		event.preventDefault();
		auth.login(signInEmail, signInPassword);
		if (signInEmail && signInPassword) {
			navigate(redirectPath, { replace: true });
		}
	};

	return (
		<>
			<div className='flex justify-center h-screen'>
				<Card className='my-auto w-11/12 max-w-2xl shadow-2xl bg-black/75'>
					<p className='text-4xl mt-4 mx-auto text-white'>Sign in</p>
					<Form id='sign_up' inline className='w-11/12 mx-auto mt-4'>
						<FormGroup className='mb-2 me-sm-2 mb-sm-0'>
							<Label className='me-sm-2 text-white' for='email'>
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
							<Label className='me-sm-2 text-white mt-2' for='password'>
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
								className='mt-4 bg-white text-black	w-24'
								onClick={handleLogin}
								type='submit'
								value='Sign in'>
								Submit
							</Button>
						</div>
					</Form>
					<Button
						className='mt-4 mx-auto bg-gray text-black	mb-4 w-24'
						href='/register'>
						Register
					</Button>
				</Card>
			</div>
		</>
	);
}

export default Signin;
