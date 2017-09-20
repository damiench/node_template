import * as express from 'express';
import * as path from 'path';

class App {
	public express;

	constructor () {
		this.express = express();
		this.setupRoutes();
		this.serveFile();
	}

	private setupRoutes (): void {
		const router = express.Router();

		router.get('/', (req: express.Request, res: express.Response) => {

			res.sendFile(
				path.join(__dirname, '/../client/index.html')
			);
		});

		this.express.use('/', router);
	}

	private serveFile (): void {

		this.express.use(
			express.static(
				path.join(__dirname, '../client')
			)
		);
	}
}

export default new App().express;
