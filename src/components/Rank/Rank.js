// Utilities
import React from "react";
import { useAuth } from "../../common/Auth/Auth";

// Style

function Rank() {
	const auth = useAuth();

	return (
		<>
			<div className='pt-12 flex justify-center z-30 px-3'>
				<div className='text-3xl text-white z-30'>
					{`${auth.user.name}, your current entry count is...`}
				</div>
				<div className='text-3xl text-white z-30'>{auth.user.entries}</div>
			</div>
		</>
	);
}

export default Rank;
