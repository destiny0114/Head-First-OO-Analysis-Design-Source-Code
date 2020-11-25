import {Guitar} from './Guitar';
import {Type} from './Type';
import {Builder} from './Builder';
import {Wood} from './Wood';
import {GuitarSpec} from './GuitarSpec';

export class Inventory {
	private guitars: Guitar[];

	constructor() {
		this.guitars = [];
	}

	addGuitar(serialNumber: string, price: number, builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood): void {
		const guitar = new Guitar(serialNumber, price, builder, model, type, backWood, topWood);
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
			let guitarSpec = guitar.getSpec();
			if (searchSpec.getBuilder() !== guitarSpec.getBuilder()) continue;
			let model = searchSpec.getModel().toLowerCase();
			if (model !== null && model !== '' && model !== guitarSpec.getModel().toLowerCase()) continue;
			if (searchSpec.getType() !== guitarSpec.getType()) continue;
			if (searchSpec.getBackWood() !== guitarSpec.getBackWood()) continue;
			if (searchSpec.getTopWood() !== guitarSpec.getTopWood()) continue;
			matchingGuitar.push(guitar);
		}
		return matchingGuitar;
	}
}
