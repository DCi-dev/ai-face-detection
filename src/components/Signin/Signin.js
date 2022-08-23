// Utilities
import React from "react";
import { useState } from "react";

import { Form, FormGroup, Label, Input, Button, Card } from "reactstrap";

function Signin({ onRouteChange, loadUser }) {
	// useState
	const [signInEmail, setSignInEmail] = useState("");
	const [signInPassword, setSignInPassword] = useState("");

	const onEmailChange = (event) => {
		setSignInEmail(event.target.value);
	};
	const onPasswordChange = (event) => {
		setSignInPassword(event.target.value);
	};
	const onSubmitSignIn = () => {
		fetch("http://localhost:3000/signin", {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: signInEmail,
				password: signInPassword,
			}),
		})
			.then((response) => response.json())
			.then((user) => {
				if (user.id) {
					loadUser(user);
					onRouteChange("home");
				}
			});
	};

	return (
		<>
			<div className='flex justify-center'>
				<Card className='mt-20 w-11/12 max-w-2xl shadow-2xl'>
					<p className='text-4xl mt-4'>Sign in</p>
					<Form id='sign_up' inline className='w-11/12 mx-auto mt-4'>
						<FormGroup className='mb-2 me-sm-2 mb-sm-0'>
							<Label className='me-sm-2' for='email'>
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
								className='mt-4 bg-gray-700 text-black	w-24'
								onClick={onSubmitSignIn}
								type='submit'
								value='Sign in'>
								Submit
							</Button>
							<Button
								className='mt-4 text-black	mb-4 w-24'
								onClick={() => onRouteChange("register")}>
								Register
							</Button>
						</div>
					</Form>
				</Card>
			</div>
		</>
	);
}

export default Signin;
