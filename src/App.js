import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCallback } from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { AuthProvider } from "./common/Auth/Auth";
import RequireAuth from "./common/Auth/RequireAuth";

import Navigation from "./common/Navigation/Navigation";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import RegisterView from "./views/RegisterView";

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

	return (
		<AuthProvider>
			<div className='App'>
				<Particles
					className='-z-10'
					id='tsparticles'
					init={particlesInit}
					loaded={particlesLoaded}
					options={particlesSettings}
				/>
				<Navigation

				//  onRouteChange={onRouteChange}
				/>
				<BrowserRouter>
					<Routes>
						<Route index element={<Home />} />
						<Route path='register' element={<RegisterView />} />
						<Route path='signin' element={<Home />} />
						{/* <Route
							path='dashboard'
							element={
								<RequireAuth>
									<Dashboard />
								</RequireAuth>
							}
						/>*/}
						<Route element={<RequireAuth />}>
							<Route path='dashboard' element={<Dashboard />} exact />
						</Route>
					</Routes>
				</BrowserRouter>
			</div>
		</AuthProvider>
	);
}

export default App;
