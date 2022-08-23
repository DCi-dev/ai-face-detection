// Utilities
import React from "react";

function ImageLinkForm({ onInputChange, onButtonSubmit }) {
	return (
		<>
			<div className='pt-8 z-30'>
				<p className='text-2xl text-white z-30'>
					This Magic Brain will detect faces in your pictures. Give it a try!
				</p>
				<div className='flex justify-center z-30'>
					<div className='pt-4 flex content-center justify-center max-w-5xl w-full mx-2'>
						<input
							type='text'
							className='w-9/12 z-30'
							placeholder='Paste an image link here'
							onChange={onInputChange}
						/>
						<button
							className='btn bg-dark text-white ml-4 w-3/12 hover:animate-bounce z-20'
							onClick={onButtonSubmit}>
							Detect
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default ImageLinkForm;
