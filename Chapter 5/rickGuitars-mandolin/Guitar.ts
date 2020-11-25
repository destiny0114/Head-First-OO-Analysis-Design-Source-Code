import {Instrument} from './Instrument';
import {InstrumentCategory} from './InstrumentCategory';
import {GuitarSpec} from './GuitarSpec';

export class Guitar extends Instrument {
	constructor(serialNumber: string, price: number, spec: GuitarSpec) {
		super(serialNumber, price, spec);
	}

	getCategory(): InstrumentCategory {
		return InstrumentCategory.GUITAR;
	}
}
