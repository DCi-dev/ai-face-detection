import React from "react";
import { useState } from "react";

import Rank from "../components/Rank/Rank";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";

function Dashboard() {
	// useState
	const [input, setInput] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [boxes, setBoxes] = useState([]);

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
									url: `${input}`,
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
