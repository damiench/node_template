console.log('blablabla');
import * as express from 'express';
import * as path from 'path';
import serverRoutes from './routes/server-rendering';

class App {
	public express;

	constructor() {
		this.express = express();
		this.setViewEngine();
		this.serveFile();
		this.setupRoutes();
	}

	private setViewEngine(): void {
		this.express.set('views', path.join(__dirname, '../..', 'views'));
		this.express.set('view engine', 'pug');
	}

	private setupRoutes(): void {
		this.express.get('*', serverRoutes);
	}

	private serveFile(): void {

		this.express.use(
			express.static(
				path.join(__dirname, '../client')
			)
		);
	}
}

export default new App().express;
