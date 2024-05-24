const express = require('express');


const app = express();
const port = 8080;
app.use(express.json());

function findFlightPath(flights) {
    let outgoing = {};
    let destinations = new Set();
    flights.forEach(([source, dest]) => {
        outgoing[source] = dest;
        destinations.add(dest);
    })

    let startingLocation = null;
    for (let o in outgoing) {
        if (!destinations.has(o)) {
            startingLocation = o;
            break;
        }
    }

    let path = [];
    let curr = startingLocation;
    while (curr in outgoing) {
        path.push(curr)
        curr = outgoing[curr]
    }
    path.push(curr);
    return path;
}

app.post("/calculate", (req, res) => {
    const postData = req.body.allFlights;

    if (!Array.isArray(postData) || postData.some(d => d.length !== 2)) {
        return res.status(422).json({ error: 'Unprocessable input format' });
    }

    try {
        const path = findFlightPath(postData);
        res.json({ path, "Total Stops": path.length - 1 });
    } catch (ex) {
        res.status(500).json({ error: ex.message })
    }
});

app.listen(port, () => {
    console.log(`Flight Path Finder running at http://localhost:${port}`);
});
