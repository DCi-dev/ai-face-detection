import React from "react";
import { useState } from "react";

import { useAuth } from "../common/Auth/Auth";

import Rank from "../components/Rank/Rank";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";

function Dashboard() {
	// useState
	const [input, setInput] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [boxes, setBoxes] = useState([]);

	const auth = useAuth();

	// Capture inputs
	const onInputChange = (event) => {
		setInput(event.target.value);
	};

	const onButtonSubmit = () => {
		setImageUrl(input);
		fetch("https://ai-face-detection-api-production.up.railway.app/imageurl", {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				input: input,
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				if (response) {
					fetch(
						"https://ai-face-detection-api-production.up.railway.app/image",
						{
							method: "put",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								id: auth.user.id,
							}),
						}
					)
						.then((response) => response.json())
						.then((count) => {
							auth.entries(Object.assign(auth.user, { entries: count }));
						})
						.catch(console.log);
				}
				displayFaceBox(calculateFaceLocation(response));
			})
			.catch((err) => console.log(err));
	};

	// Face location box
	const calculateFaceLocation = (data) => {
		const image = document.getElementById("inputImage");
		const width = Number(image.width);
		const height = Number(image.height);
		return data.outputs[0].data.regions.map((face) => {
			const clarifaiFace = face.region_info.bounding_box;
			return {
				leftCol: clarifaiFace.left_col * width,
				topRow: clarifaiFace.top_row * height,
				rightCol: width - clarifaiFace.right_col * width,
				bottomRow: height - clarifaiFace.bottom_row * height,
			};
		});
	};

	const displayFaceBox = (boxes) => {
		setBoxes(boxes);
	};

	return (
		<>
			<div className='mt-14 z-30'>
				<Rank className='z-10' />
				<ImageLinkForm
					className='z-10'
					onInputChange={onInputChange}
					onButtonSubmit={onButtonSubmit}
				/>

				<FaceRecognition imageUrl={imageUrl} boxes={boxes} />
			</div>
		</>
	);
}

export default Dashboard;
