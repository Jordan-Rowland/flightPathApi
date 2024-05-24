import { expect } from 'chai';
import findFlightPath from '../src/services/flightPath.js';


describe('findFlightPath', () => {
    it('should return the correct path for a single flight', () => {
        const flightData = [['SFO', 'EWR']];
        const result = findFlightPath(flightData);
        expect(result).to.deep.equal(['SFO', 'EWR']);
    });

    it('should return the correct path for multiple flightData', () => {
        const flightData = [['ATL', 'EWR'], ['SFO', 'ATL']];
        const result = findFlightPath(flightData);
        expect(result).to.deep.equal(['SFO', 'EWR']);
    });

    it('should return the correct path for a complex flight list', () => {
        const flightData = [['IND', 'EWR'], ['SFO', 'ATL'], ['GSO', 'IND'], ['ATL', 'GSO']];
        const result = findFlightPath(flightData);
        expect(result).to.deep.equal(['SFO', 'EWR']);
    });

    it('should handle empty input', () => {
        const flightData = [];
        const result = findFlightPath(flightData);
        expect(result).to.deep.equal([]);
    });
});
