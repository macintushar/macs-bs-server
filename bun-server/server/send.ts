import { Hono } from 'hono';

const sendRoute = new Hono();

sendRoute.post("/feedback", async (c) => {
    const body = await c.req.json();
    console.log(body);

    return c.json({ feedback: `Received Feedback: ${body.feedback}` })
})

export default sendRoute;