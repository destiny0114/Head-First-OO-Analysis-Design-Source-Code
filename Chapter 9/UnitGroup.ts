import {Unit} from './Unit';

export class UnitGroup {
	public units: {[key: string]: Unit};
	constructor(unitList: Unit[]) {
		this.units = {};

		for (let i of unitList) {
			this.units = {...this.units, [i.getId()]: i};
		}
	}

	addUnit(unit: Unit): void {
		this.units[unit.getId()] = unit;
	}

	removeUnitById(id: number): void {
		const {[id]: _, ...newUnits} = this.units;
		this.units = {...newUnits};
	}

	removeUnit(unit: Unit): void {
		this.removeUnitById(unit.getId());
	}

	getUnit(id: number) {
		return this.units[id];
	}

	getUnits(): Unit[] {
		const unitList: Unit[] = [];
		for (let key in this.units) {
			unitList.push(this.units[key]);
		}
		return unitList;
	}
}
