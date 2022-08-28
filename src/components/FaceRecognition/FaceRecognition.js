// Utilities
import React from "react";

import "./FaceRecognition.css";

function FaceRecognition({ imageUrl, boxes }) {
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
					{boxes.map((box) => (
						<div
							key={`box${box.topRow}${box.rightCol}`}
							className='bounding-box'
							style={{
								top: box.topRow,
								right: box.rightCol,
								bottom: box.bottomRow,
								left: box.leftCol,
							}}></div>
					))}
				</div>
			</div>
		</>
	);
}

export default FaceRecognition;
