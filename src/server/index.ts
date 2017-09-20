import App from './App';

const port = process.env.PORT || 7000;

App.listen(port, (err) => {
	if (err) {
		return console.log(err);
	}

	return console.log(`Boss, all prepared at port ${port}. Go and check!`);
});
