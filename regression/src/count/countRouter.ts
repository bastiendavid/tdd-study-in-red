import {Handler, json, Request, Response, Router} from 'express';
import Sum from './sum';
import Count from './Count';

export default class CountRouter {
    private count: Count;

    constructor() {
        this.count = new Count();
    }

    router(): Router {
        const router = Router();
        router.use(json());
        router.post('/add', this.routeForAdd());
        return router;
    }

    private routeForAdd(): Handler {
        return (req: Request, res: Response) => {
            console.log(`[CountRouter:add] Adding numbers: [${req.body}]`);
            const numbers = req.body as Array<number>;
            const sum = this.count.add(numbers);
            console.log(`[CountRouter:add] Result of addition: ${JSON.stringify(sum)}`);
            res.status(200).send(sum);
        };
    }
}
