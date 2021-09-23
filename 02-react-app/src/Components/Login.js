import React, { useState } from 'react';

export const Login = () => {
	const [form, setForm] = useState({ email: '', password: '' });
	const [data, setData] = useState({});
	const [users, setUsers] = useState({});
	const onSubmit = async (event) => {
		event.preventDefault();

		const URL = 'http://localhost:3001/api/login';
		console.log(form);

		const response = await fetch(URL, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form),
		});

		const data = await response.json();
		setData(data);
		alert('Hice fetch');
		console.log(data);
		const users = await getPrivateUsers(data.token);
		setUsers(users);
		//Peticion backend'
	};

	const onChange = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
		console.log(form);
	};

	const getPrivateUsers = async (token) => {
		const URL = 'http://127.0.0.1:3001/api/users';
		const respuesta = await fetch(URL, {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
		const data = await respuesta.json();
		return data;
	};

	return (
		<div className="container">
			<div className="row justify-content-center">
				<h2> Login </h2>
				<div className="col-md-4">
					<form onSubmit={onSubmit}>
						<div className="mb-3">
							<label for="exampleInputEmail1" className="form-label">
								Email
							</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								name="email"
								onChange={onChange}
							/>
						</div>
						<div className="mb-3">
							<label for="exampleInputPassword1" className="form-label">
								Password
							</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								name="password"
								onChange={onChange}
							/>
						</div>

						<button type="submit" className="btn btn-primary">
							Ingresar
						</button>
					</form>
				</div>
			</div>
			{JSON.stringify(data)}
			{JSON.stringify(users)}
		</div>
	);
};
