const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const router = express.Router();

const app = express();
	app.use(cors());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(express.static(path.join(__dirname, '../public')));
	app.use('/', router);
	app.listen(port, () => {
		console.log(chalk.gray(`Starting the server at port ${port}`));
	});


router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + './public/index.html'));
});

router.get('/giveWater', (req, res) => {
  
})