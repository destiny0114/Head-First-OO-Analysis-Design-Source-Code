import fs from 'fs';
import {Subway} from './Subway';

export class SubwayLoader {
	static index = -1;

	private subway: Subway;

	constructor() {
		this.subway = new Subway();
	}

	loadFromFile(fileName: string) {
		const fileData = fs
			.readFileSync(fileName, {
				encoding: 'utf-8',
			})
			.split('\n');
		this.loadStations(this.subway, fileData);
		let lineName = fileData[++SubwayLoader.index];
		while (lineName !== undefined && lineName.length > 0) {
			this.loadLines(this.subway, fileData, lineName);
			lineName = fileData[++SubwayLoader.index];
		}
		return this.subway;
	}

	loadStations(subway: Subway, stationsData: string[]) {
		let currentLine;
		currentLine = stationsData[++SubwayLoader.index];

		while (currentLine.length > 0) {
			subway.addStation(currentLine);
			currentLine = stationsData[++SubwayLoader.index];
		}
	}

	loadLines(subway: Subway, stationsData: string[], lineName: string) {
		let station1Name, station2Name;
		station1Name = stationsData[++SubwayLoader.index];
		station2Name = stationsData[++SubwayLoader.index];
		while (station2Name !== undefined && station2Name.length > 0) {
			subway.addConnection(station1Name, station2Name, lineName);
			station1Name = station2Name;
			station2Name = stationsData[++SubwayLoader.index];
		}
	}
}
