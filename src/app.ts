import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 4000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Bitch!');
});

app.get('/yo', (req: Request, res: Response) => {
    res.send('yo ho');
});

app.listen(port, () => {
    console.log('Server Started...')
})

