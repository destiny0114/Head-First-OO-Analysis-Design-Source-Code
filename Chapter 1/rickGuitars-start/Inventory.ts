import {Guitar} from './Guitar';

export class Inventory {
	private guitars: Guitar[];

	constructor() {
		this.guitars = [];
	}

	addGuitar(serialNumber: string, price: number, builder: string, model: string, type: string, backWood: string, topWood: string): void {
		const guitar = new Guitar(serialNumber, price, builder, model, type, backWood, topWood);
		this.guitars.push(guitar);
	}

	getGuitar(serialNumber: string): Guitar | null {
		for (let guitar of this.guitars) {
			if (guitar.getSerialNumber() === serialNumber) return guitar;
		}
		return null;
	}

	search(searchGuitar: Guitar): Guitar | null {
		for (let guitar of this.guitars) {
			let builder = guitar.getBuilder();
			if (builder !== null && builder !== '' && builder !== searchGuitar.getBuilder()) continue;
			let model = guitar.getModel().toLowerCase();
			if (model !== null && model !== '' && model !== searchGuitar.getModel()) continue;
			let type = guitar.getType();
			if (type !== null && type !== '' && type !== searchGuitar.getType()) continue;
			let backWood = guitar.getBackWood();
			if (backWood !== null && backWood !== '' && backWood !== searchGuitar.getBackWood()) continue;
			let topWood = guitar.getTopWood();
			if (topWood !== null && topWood !== '' && topWood !== searchGuitar.getTopWood()) continue;
			return guitar;
		}
		return null;
	}
}
