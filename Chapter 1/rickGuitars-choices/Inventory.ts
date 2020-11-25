import {Guitar} from './Guitar';
import {Type} from './Type';
import {Builder} from './Builder';
import {Wood} from './Wood';

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

	search(searchGuitar: Guitar): Guitar[] {
		const matchingGuitar: Guitar[] = [];
		for (let guitar of this.guitars) {
			let builder = guitar.getBuilder();
			if (builder !== null && builder !== '' && builder !== searchGuitar.getBuilder()) continue;
			let model = guitar.getModel().toLowerCase();
			if (model !== null && model !== '' && model !== searchGuitar.getModel().toLowerCase()) continue;
			let type = guitar.getType();
			if (type !== null && type !== '' && type !== searchGuitar.getType()) continue;
			let backWood = guitar.getBackWood();
			if (backWood !== null && backWood !== '' && backWood !== searchGuitar.getBackWood()) continue;
			let topWood = guitar.getTopWood();
			if (topWood !== null && topWood !== '' && topWood !== searchGuitar.getTopWood()) continue;
			matchingGuitar.push(guitar);
		}
		return matchingGuitar;
	}
}
