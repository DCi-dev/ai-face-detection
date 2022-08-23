import "./App.css";
import { useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Navigation from "./common/Navigation/Navigation";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";

function App() {
	// Particles config
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {}, []);

	const particlesSettings = {
		fpsLimit: 60,
		interactivity: {
			events: {
				onClick: {
					enable: true,
					mode: "push",
				},
				onHover: {
					enable: true,
					mode: "repulse",
				},
				resize: true,
			},
			modes: {
				push: {
					quantity: 4,
				},
				repulse: {
					distance: 200,
					duration: 10,
				},
			},
		},
		particles: {
			color: {
				value: "rgba(128, 0, 0, 1)",
			},
			links: {
				color: "rgba(128, 0, 0, 1)",
				distance: 150,
				enable: true,
				opacity: 0.5,
				width: 1,
			},
			collisions: {
				enable: true,
			},
			move: {
				directions: "none",
				enable: true,
				outModes: {
					default: "bounce",
				},
				random: false,
				speed: 0.5,
				straight: false,
			},
			number: {
				density: {
					enable: true,
					area: 500,
				},
				value: 133,
			},
			opacity: {
				value: 0.5,
			},
			shape: {
				type: "circle",
			},
			size: {
				value: { min: 1, max: 5 },
			},
		},
		detectRetina: true,
	};

	// useState
	const [input, setInput] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [box, setBox] = useState({});
	const [route, setRoute] = useState("home");
	const [isSignIn, setIsSignIn] = useState(false);
	const [user, setUser] = useState({
		id: "",
		name: "User1",
		email: "",
		entries: 0,
		joined: "",
	});

	// User
	const loadUser = (data) => {
		setUser({
			id: data.id,
			name: data.name,
			email: data.email,
			entries: data.entries,
			joined: data.joined,
		});
	};

	// Route
	const onRouteChange = (route) => {
		if (route === "signout") {
			setIsSignIn(false);
		} else if (route === "home") {
			setIsSignIn(true);
		}
		setRoute(route);
	};

	// Capture inputs
	const onInputChange = (event) => {
		setInput(event.target.value);
	};

	const onButtonSubmit = () => {
		setImageUrl(input);
		fetch(
			`https://api.clarifai.com/v2/models/face-detection/versions/45fb9a671625463fa646c3523a3087d5/outputs`,
			// Api settings
			{
				method: "POST",
				headers: {
					Accept: "application/json",
					Authorization: "Key 3c290d71e7ec49839a69f5e1c407486d",
				},
				body: JSON.stringify({
					user_app_id: {
						user_id: "cdi",
						app_id: "facial-recognition",
					},
					inputs: [
						{
							data: {
								image: {
									url: `${imageUrl}`,
								},
							},
						},
					],
				}),
			}
		)
			.then((response) => response.json())
			.then((result) => {
				displayFaceBox(calculateFaceLocation(result));
			})
			.catch((err) => console.log(err));
	};

	// Face location box
	const calculateFaceLocation = (data) => {
		const clarifaiFace =
			data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById("inputImage");
		const width = Number(image.width);
		const height = Number(image.height);
		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - clarifaiFace.right_col * width,
			bottomRow: height - clarifaiFace.bottom_row * height,
		};
	};

	const displayFaceBox = (box) => {
		setBox(box);
	};

	return (
		<div className='App'>
			<Particles
				className='-z-10'
				id='tsparticles'
				init={particlesInit}
				loaded={particlesLoaded}
				options={particlesSettings}
			/>
			<Navigation isSignedIn={isSignIn} onRouteChange={onRouteChange} />

			{route === "home" ? (
				<div className='mt-14 z-30'>
					<Rank name={user.name} entries={user.entries} className='z-10' />
					<ImageLinkForm
						className='z-10'
						onInputChange={onInputChange}
						onButtonSubmit={onButtonSubmit}
					/>
					<FaceRecognition imageUrl={imageUrl} box={box} />
				</div>
			) : route === "signin" ? (
				<Signin
					className='z-10'
					onRouteChange={onRouteChange}
					loadUser={loadUser}
				/>
			) : (
				<Register
					className='z-10'
					onRouteChange={onRouteChange}
					loadUser={loadUser}
				/>
			)}
		</div>
	);
}

export default App;
