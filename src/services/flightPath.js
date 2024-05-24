export default function findFlightPath(flights) {
    if (flights?.length === 0) return [];

    let outgoing = {};
    let destinations = new Set();
    let sources = new Set();
    flights.forEach(([source, dest]) => {
        outgoing[dest] = source;
        sources.add(source);
        outgoing[source] = dest;
        destinations.add(dest);
    })

    let startingLocation = null;
    let endingLocation = null;
    for (let og in outgoing) {
        if (!destinations.has(og)) {
            startingLocation = og;
            continue;
        }
        if (!sources.has(og)) {
            endingLocation = og;
            continue;
        }
    }

    return [startingLocation, endingLocation];
}
