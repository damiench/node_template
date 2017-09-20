import * as express from 'express';

class App {
	public express;

	constructor () {
		this.express = express();
		this.setupRoutes();
	}

	private setupRoutes (): void {
		const router = express.Router();

		router.get('/', (req: express.Request, res: express.Response) => {
			res.json({
				response: {
					message: `Hello, ${req.baseUrl}!`
				}
			});
		});

		this.express.use('/', router);
	}
}

export default new App().express;
