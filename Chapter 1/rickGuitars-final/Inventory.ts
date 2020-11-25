import {Guitar} from './Guitar';
import {GuitarSpec} from './GuitarSpec';

export class Inventory {
	private guitars: Guitar[];

	constructor() {
		this.guitars = [];
	}

	addGuitar(serialNumber: string, price: number, spec: GuitarSpec): void {
		const guitar = new Guitar(serialNumber, price, spec);
		this.guitars.push(guitar);
	}

	getGuitar(serialNumber: string): Guitar | null {
		for (let guitar of this.guitars) {
			if (guitar.getSerialNumber() === serialNumber) return guitar;
		}
		return null;
	}

	search(searchSpec: GuitarSpec): Guitar[] {
		const matchingGuitar: Guitar[] = [];
		for (let guitar of this.guitars) {
			if (guitar.getSpec().matches(searchSpec)) {
				matchingGuitar.push(guitar);
			}
		}
		return matchingGuitar;
	}
}
