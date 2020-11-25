import {InstrumentSpec} from './InstrumentSpec';
import {InstrumentCategory} from './InstrumentCategory';

export abstract class Instrument {
	private serialNumber: string;
	private price: number;
	private spec: InstrumentSpec;

	constructor(serialNumber: string, price: number, spec: InstrumentSpec) {
		this.serialNumber = serialNumber;
		this.price = price;
		this.spec = spec;
	}

	abstract getCategory(): InstrumentCategory;

	getSerialNumber(): string {
		return this.serialNumber;
	}

	getPrice(): number {
		return this.price;
	}

	setPrice(newPrice: number): void {
		this.price = newPrice;
	}

	getSpec(): InstrumentSpec {
		return this.spec;
	}
}
