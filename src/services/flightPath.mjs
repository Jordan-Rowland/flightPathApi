export default function findFlightPath(flights) {
    if (flights.length === 0) return [];

    let outgoingFlights = {};
    let destinationAirports = new Set();
        flights.forEach(([source, destination]) => {
        outgoingFlights[source] = destination;
        destinationAirports.add(destination);
    });

    let startingAirport = null;
    for (let airport in outgoingFlights) {
        if (!destinationAirports.has(airport)) {
            startingAirport = airport;
            break;
        }
    }

    let currentAirport = startingAirport;
    while (currentAirport in outgoingFlights) {
        currentAirport = outgoingFlights[currentAirport];
    }
    let endingAirport = currentAirport;

    return [startingAirport, endingAirport];
}