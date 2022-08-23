// Utilities
import React from "react";

// Style

function Rank({ name, entries }) {
	return (
		<>
			<div className='pt-12 flex justify-center z-30'>
				<div className='text-3xl text-white z-30'>
					{`${name}, your current entry count is...`}
				</div>
				<div className='text-3xl text-white z-30'>{entries}</div>
			</div>
		</>
	);
}

export default Rank;
