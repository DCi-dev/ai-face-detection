import { useState, useContext, createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const login = async (signInEmail, signInPassword) => {
		const response = await fetch("http://localhost:3000/signin", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: signInEmail,
				password: signInPassword,
			}),
		});

		const data = await response.json();
		setUser(data);
	};

	const register = async (name, email, password) => {
		const response = await fetch("http://localhost:3000/register", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				email: email,
				password: password,
			}),
		});

		const data = await response.json();
		setUser(data);
	};

	const logout = () => {
		setUser(null);
	};
	return (
		<AuthContext.Provider value={{ user, login, register, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
