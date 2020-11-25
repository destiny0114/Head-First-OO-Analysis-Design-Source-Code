import {Station} from './Station';
import {Connection} from './Connection';

export class Subway {
	private stations: Station[];
	private connections: Connection[];
	public network: {[key: string]: any};

	constructor() {
		this.stations = [];
		this.connections = [];
		this.network = {};
	}

	addStation(stationName: string) {
		if (!this.hasStation(stationName)) {
			const station = new Station(stationName);
			this.stations.push(station);
		}
	}

	hasStation(stationName: string): boolean {
		return this.stations.some((station) => station.getName() === stationName);
	}

	addConnection(station1Name: string, station2Name: string, lineName: string) {
		if (this.hasStation(station1Name) && this.hasStation(station2Name)) {
			const station1 = new Station(station1Name);
			const station2 = new Station(station2Name);

			const connection = new Connection(station1, station2, lineName);
			this.connections.push(connection);
			this.connections.push(new Connection(station2, station1, connection.getLineName()));

			this.addToNetwork(station1.getName(), station2.getName());
			this.addToNetwork(station2.getName(), station1.getName());
		} else {
			throw new Error('Invalid connection: [' + station1Name + ', ' + station2Name + ', ' + lineName + ']');
		}
	}

	getConnection(station1Name: string, station2Name: string): Connection | null {
		for (let connection of this.connections) {
			const one = connection.getStation1().getName();
			const two = connection.getStation2().getName();

			if (station1Name === one && station2Name === two) {
				return connection;
			}
		}
		return null;
	}

	hasConnection(station1Name: string, station2Name: string, lineName: string): boolean {
		const station1 = new Station(station1Name);
		const station2 = new Station(station2Name);

		for (let connection of this.connections) {
			if (connection.getLineName().toUpperCase() === lineName.toUpperCase()) {
				if (connection.getStation1().equals(station1) && connection.getStation2().equals(station2)) {
					return true;
				}
			}
		}
		return false;
	}

	addToNetwork(station1Name: string, station2Name: string) {
		if (Object.keys(this.network).includes(station1Name)) {
			const connectingStations = this.network[station1Name];
			if (!connectingStations.includes(station2Name)) {
				connectingStations.push(station2Name);
			}
		} else {
			const connectingStations = [];
			connectingStations.push(station2Name);
			this.network[station1Name] = connectingStations;
		}
	}

	getDirections(startStationName: string, endStationName: string) {
		if (!this.hasStation(startStationName) || !this.hasStation(endStationName)) {
			throw new Error('Stations entered do not exist on this subway');
		}

		const start = new Station(startStationName).getName();
		const end = new Station(endStationName).getName();
		let route: (Connection | null)[] = [];
		const reachableStations = [];
		const previousStations: {[key: string]: any} = {};
		const neighbors = this.network[start];

		for (let station of neighbors) {
			if (station === end) {
				route.push(this.getConnection(start, end));
				return route;
			} else {
				reachableStations.push(station);
				previousStations[station] = start;
			}
		}

		let nextStations = [...neighbors];
		let currentStation = start;

		for (let i = 1; i < this.stations.length; i++) {
			const tmpNextStations = [];

			for (let station of nextStations) {
				reachableStations.push(station);
				currentStation = station;

				const currentNeighbors = this.network[currentStation];

				for (let neighbor of currentNeighbors) {
					if (neighbor === end) {
						reachableStations.push(neighbor);
						previousStations[neighbor] = currentStation;
						break;
					} else if (!reachableStations.includes(neighbor)) {
						reachableStations.push(neighbor);
						tmpNextStations.push(neighbor);
						previousStations[neighbor] = currentStation;
					}
				}
			}
			nextStations = [...tmpNextStations];
		}
		//We've found the path now!
		let keepLooping = true;
		let keyStation = end;
		let station;

		while (keepLooping) {
			station = previousStations[keyStation];
			route = [this.getConnection(station, keyStation)].concat(route);
			if (start === station) {
				keepLooping = false;
			}
			keyStation = station;
		}
		return route;
	}
}
