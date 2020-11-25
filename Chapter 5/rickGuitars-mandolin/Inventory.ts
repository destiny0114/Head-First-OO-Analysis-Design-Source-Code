import {Instrument} from './Instrument';
import {InstrumentSpec} from './InstrumentSpec';
import {Guitar} from './Guitar';
import {GuitarSpec} from './GuitarSpec';
import {Mandolin} from './Mandolin';
import {MandolinSpec} from './MandolinSpec';

export class Inventory {
	private instruments: Instrument[];

	constructor() {
		this.instruments = [];
	}

	addInstrument(serialNumber: string, price: number, spec: InstrumentSpec): void {
		let instrument = null;

		if (spec instanceof GuitarSpec) {
			instrument = new Guitar(serialNumber, price, spec);
		} else if (spec instanceof MandolinSpec) {
			instrument = new Mandolin(serialNumber, price, spec);
		}

		if (instrument) {
			this.instruments.push(instrument);
		}
	}

	getInstrument(serialNumber: string): Instrument | null {
		for (let instrument of this.instruments) {
			if (instrument.getSerialNumber() === serialNumber) return instrument;
		}
		return null;
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
