// Utilities
import React from "react";
import { useState } from "react";

import { Form, FormGroup, Label, Input, Button, Card } from "reactstrap";

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
	const onSubmitSignIn = () => {
		fetch("http://localhost:3000/signin", {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: email,
				password: password,
				name: name,
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
								onClick={onSubmitSignIn}
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
