import {InstrumentSpec} from './InstrumentSpec';
import {Type} from './Type';
import {Builder} from './Builder';
import {Wood} from './Wood';
import {Style} from './Style';

export class MandolinSpec extends InstrumentSpec {
	private style: Style;

	constructor(builder: Builder, model: string, type: Type, style: Style, backWood: Wood, topWood: Wood) {
		super(builder, model, type, backWood, topWood);
		this.style = style;
	}

	getStyle(): Style {
		return this.style;
	}

	matches(spec: MandolinSpec): boolean {
		if (!super.matches(spec)) return false;
		if (!(spec instanceof MandolinSpec)) return false;
		if (this.style !== spec.getStyle()) return false;
		return true;
	}
}
