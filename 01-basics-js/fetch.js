const URL = 'http://localhost:3000/api/login';

const token = 'test';

const login = async () => {
	const response = await fetch(URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});
	const data = await response.json();

	console.log(data);
};

login();
