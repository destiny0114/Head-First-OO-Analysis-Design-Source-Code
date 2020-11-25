import {InstrumentSpec} from './InstrumentSpec';
import {Type} from './Type';
import {Builder} from './Builder';
import {Wood} from './Wood';

export class GuitarSpec extends InstrumentSpec {
	private numStrings: number;

	constructor(builder: Builder, model: string, type: Type, numStrings: number, backWood: Wood, topWood: Wood) {
		super(builder, model, type, backWood, topWood);
		this.numStrings = numStrings;
	}

	getNumStrings(): number {
		return this.numStrings;
	}

	matches(spec: GuitarSpec): boolean {
		if (!super.matches(spec)) return false;
		if (!(spec instanceof GuitarSpec)) return false;
		if (this.numStrings !== spec.getNumStrings()) return false;
		return true;
	}
}
