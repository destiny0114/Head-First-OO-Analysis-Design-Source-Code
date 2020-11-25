import {Instrument} from './Instrument';
import {InstrumentSpec} from './InstrumentSpec';

export class Inventory {
	private instruments: Instrument[];

	constructor() {
		this.instruments = [];
	}

	addInstrument(serialNumber: string, price: number, spec: InstrumentSpec): void {
		this.instruments.push(new Instrument(serialNumber, price, spec));
	}

	getInstrument(serialNumber: string): Instrument | null {
		for (let instrument of this.instruments) {
			if (instrument.getSerialNumber() === serialNumber) return instrument;
		}
		return null;
	}

	getInstruments() {
		return this.instruments;
	}

	search(searchSpec: InstrumentSpec): Instrument[] {
		const matchingInstrument: Instrument[] = [];
		for (let instrument of this.instruments) {
			if (instrument.getSpec().matches(searchSpec)) {
				matchingInstrument.push(instrument);
			}
		}
		return matchingInstrument;
	}
}
