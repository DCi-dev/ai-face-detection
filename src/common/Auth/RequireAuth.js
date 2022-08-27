import React from "react";
import { useAuth } from "./Auth";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAuth = () => {
	let auth = useAuth();
	const location = useLocation();

	return auth.user ? (
		<Outlet />
	) : (
		<Navigate to='/dashboard' state={{ path: location.pathname }} />
	);
};

export default RequireAuth;
