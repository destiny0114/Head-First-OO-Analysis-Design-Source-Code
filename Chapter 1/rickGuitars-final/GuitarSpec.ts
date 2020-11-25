import {Type} from './Type';
import {Builder} from './Builder';
import {Wood} from './Wood';

export class GuitarSpec {
	private builder: Builder;
	private model: string;
	private type: Type;
	private backWood: Wood;
	private topWood: Wood;

	private numStrings: number;

	constructor(builder: Builder, model: string, type: Type, numStrings: number, backWood: Wood, topWood: Wood) {
		this.builder = builder;
		this.model = model;
		this.type = type;
		this.backWood = backWood;
		this.topWood = topWood;

		this.numStrings = numStrings;
	}

	getBuilder(): string {
		return this.builder;
	}

	getModel(): string {
		return this.model;
	}

	getType(): string {
		return this.type;
	}

	getBackWood(): string {
		return this.backWood;
	}

	getTopWood(): string {
		return this.topWood;
	}

	getNumStrings(): number {
		return this.numStrings;
	}

	matches(spec: GuitarSpec): boolean {
		if (this.model !== null && this.model !== '' && this.model.toLowerCase() !== spec.getModel().toLowerCase()) return false;
		if (this.builder !== spec.getBuilder()) return false;
		if (this.type !== spec.getType()) return false;
		if (this.backWood !== spec.getBackWood()) return false;
		if (this.topWood !== spec.getTopWood()) return false;
		if (this.numStrings !== spec.getNumStrings()) return false;
		return true;
	}
}
