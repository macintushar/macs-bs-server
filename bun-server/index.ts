import { Hono } from 'hono';
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'

import dataRoute from './server/data';
import sendRoute from './server/send';

const app = new Hono();

app.use(logger())
app.use('/send/*', cors())

app.route('/data', dataRoute);
app.route('/send', sendRoute);

app.get('/', (c) => c.json({ "greetings": "this is mac's bs server" }));

// Use Bun.serve to start the server
Bun.serve({
    fetch: app.fetch,
    port: 6969, // You can specify the port here
});