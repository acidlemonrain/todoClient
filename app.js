const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('dist'));

app.get('/', (req, res) => {
	res.sendFile('index.html', {
		root: path.join(__dirname, './dist')
	});
});
app.listen(3000);
