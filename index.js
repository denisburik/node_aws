const express = require('express');

const app = express();

app.get('/', (request, response) => {
	return response.json({
		message: 'Server is up motherf*ck',
		description: 'Its not a description...'
	});
});

app.listen(7777)

