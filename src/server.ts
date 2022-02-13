import 'dotenv/config';
import app from './app';

process.on('SIGINT', () => {
    server.close((err) => {
        process.exit(err ? 1 : 0);
    });
});

const port = process.env.NODE_PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Running at ${port}`);
});

export default server;
