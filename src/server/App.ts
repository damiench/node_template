console.log('blablabla');
import * as express from 'express';
import * as path from 'path';
import serverRoutes from './routes/server-rendering';

class App {
	public express;

	constructor() {
		this.express = express();
		this.serveFile();
		this.setupRoutes();
		this.setViewEngine();
	}

	private setViewEngine(): void {
		this.express.set('view', 'pug');
	}

	private setupRoutes(): void {
		// const router = express.Router();
		//
		// router.get('*', (req: express.Request, res: express.Response) => {
		//
		// 	res.sendFile(
		// 		path.join(__dirname, '../client/index.html')
		// 	);
		// });
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
