// Utilities
import React from "react";

import "./FaceRecognition.css";

function FaceRecognition({ imageUrl, box }) {
	return (
		<>
			<div className='flex justify-center'>
				<div className='absolute mt-5'>
					<img
						id='inputImage'
						src={imageUrl}
						alt=''
						width='750px'
						height='auto'
					/>
					<div
						className='bounding-box'
						style={{
							top: box.topRow,
							right: box.rightCol,
							bottom: box.bottomRow,
							left: box.leftCol,
						}}></div>
				</div>
			</div>
		</>
	);
}

export default FaceRecognition;
