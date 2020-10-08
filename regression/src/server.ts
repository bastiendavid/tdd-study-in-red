import express from 'express';
import CountRouter from './count/countRouter';
import * as http from 'http';

export default class Server {

    private server?: http.Server;

    public start(port: number): Promise<void> {
        return new Promise((resolve, reject) => {
            const app = this.application();
            this.server = app.listen(port, () => {
                console.log(`Server started on port ${port}`);
                resolve();
            });
        });
    }

    private application() {
        const app = express();
        app.use('/count', new CountRouter().router());
        return app;
    }

    public stop(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.server?.close((err) => {
                if (err) {
                    reject();
                    return;
                }
                console.log('Server stopped');
                resolve();
            });
        });
    }
}
