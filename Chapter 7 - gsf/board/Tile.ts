import {Unit} from '../unit/Unit';

export class Tile {
	private units: Unit[];

	constructor() {
		this.units = [];
	}

	addUnit(unit: Unit): void {
		this.units.push(unit);
	}

	removeUnit(unit: Unit): void {
		this.units.filter((item) => item !== unit);
	}

	removeUnits(): void {}

	getUnits(): Unit[] {
		return this.units;
	}
}
