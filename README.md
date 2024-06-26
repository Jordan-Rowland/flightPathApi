Story: There are over 100,000 flights a day, with millions of people and cargo being transferred worldwide. With so many people and different carrier/agency groups, it can be hard to track where a person might be. In order to determine a person's flight path, we must sort through all of their flight records.

Goal: To create a microservice API to help us understand and track how a particular person’s flight path may be queried. The API should accept a request that includes a list of flights defined by a source and destination airport code. These flights may not be listed in order and must be sorted to find the total flight paths starting and ending at airports.

Examples: 
```sh
[['SFO', 'EWR']]                                                 => ['SFO', 'EWR']
[['ATL', 'EWR'], ['SFO', 'ATL']]                                 => ['SFO', 'EWR']
[['IND', 'EWR'], ['SFO', 'ATL'], ['GSO', 'IND'], ['ATL', 'GSO']] => ['SFO', 'EWR']
```

Specifications: 
Your microservice must listen on port 8080 and expose the flight path tracker under the /calculate endpoint.
Define and document the format of the API endpoint in the README.
Use JavaScript and any tools to help you best accomplish the task.
When you are done with the assignment, follow up via email with an estimate of how long you spent on it and any interesting ideas you wish to share.

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
