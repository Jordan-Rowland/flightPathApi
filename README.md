# Flight Path API

The Flight Path API is a simple microservice built with Node.js designed to find the source and destination locations based on input data from a list of lists, each list item containing a starting location and an ending location.

## API Endpoint

### `[POST] /calculate`

This endpoint accepts a JSON object with a single key, `allFlights`, containing the list of lists representing flight paths. It returns a JSON object with a single key, `path`, containing a list with the absolute start and end locations derived from the input data.

#### Request Format

- **URL:** `http://localhost:8080/calculate`
- **Method:** `POST`
- **Content-Type:** `application/json`
- **Request Body:**
  ```json
  {
      "allFlights": [
          ["SFO", "EWR"],
          ["ATL", "EWR"],
          ["SFO", "ATL"]
      ]
  }
  ```


- **Response Format:**
  ```json
  {
      "path": ["SFO", "EWR"]
  }
  ```

## Running the Application

### Install Dependencies:
Ensure you have Node.js installed, then run:
```sh
npm install
```

### Start the Server:
Run the application using:
```sh
node src/index.mjs
```

You will receive a message that lets you know the server is running: Flight Path Finder running at http://localhost:8080. The server listens on port 8080.


## Running the Tests
To run the test suite, use the following command in a terminal window when the server is not running:
```sh
npm test
```

## Project Structure
- `src/index.mjs`: Main entry point for the application.
- `src/services/flightPath.mjs`: Function to calculate the flight path.
- `test/flightPath.test.mjs`: Unit tests for the flight path calculation function.
