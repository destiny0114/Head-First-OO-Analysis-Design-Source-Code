import {Instrument} from './Instrument';
import {InstrumentCategory} from './InstrumentCategory';
import {MandolinSpec} from './MandolinSpec';

export class Mandolin extends Instrument {
	constructor(serialNumber: string, price: number, spec: MandolinSpec) {
		super(serialNumber, price, spec);
	}

	getCategory(): InstrumentCategory {
		return InstrumentCategory.MANDOLIN;
	}
}
