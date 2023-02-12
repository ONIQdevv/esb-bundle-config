import path from 'path';
import express from 'express';
import {EventEmitter} from 'events';

const PORT = Number(process.env.PORT) || 3000;
const emit = new EventEmitter();
const starter = express();


starter.use(
    express.static(
        path.resolve(
            __dirname, '..', '..', 'build')
    )
);

starter.get('/subscribe', (req, res) => {
    const headers = {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache'
    };
    res.writeHead(200, headers);
    res.write('');

    emit.on('refresh', () => {
        res.write('data: message \n\n');
    });
});

starter.listen(PORT, () => console.log('server started on http://localhost:' + PORT));