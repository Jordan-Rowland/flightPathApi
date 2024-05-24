import express from 'express';
import findFlightPath from './services/flightPath.mjs';


const app = express();
const port = 8080;
app.use(express.json());

app.post("/calculate", (req, res) => {
    const postData = req.body.allFlights;

    if (!Array.isArray(postData) || postData.some(d => d.length !== 2)) {
        return res.status(422).json({ error: 'Unprocessable input format' });
    }

    try {
        const path = findFlightPath(postData);
        res.json({ path });
    } catch (ex) {
        res.status(500).json({ error: ex.message })
    }
});

app.listen(port, () => {
    console.log(`Flight Path Finder running at http://localhost:${port}`);
});

export default app;
