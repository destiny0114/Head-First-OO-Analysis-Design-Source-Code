import {Type} from './Type';
import {Builder} from './Builder';
import {Wood} from './Wood';

export abstract class InstrumentSpec {
	private builder: Builder;
	private model: string;
	private type: Type;
	private backWood: Wood;
	private topWood: Wood;

	constructor(builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood) {
		this.builder = builder;
		this.model = model;
		this.type = type;
		this.backWood = backWood;
		this.topWood = topWood;
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

	matches(spec: InstrumentSpec): boolean {
		if (this.model !== null && this.model !== '' && this.model.toLowerCase() !== spec.getModel().toLowerCase()) return false;
		if (this.builder !== spec.getBuilder()) return false;
		if (this.type !== spec.getType()) return false;
		if (this.backWood !== spec.getBackWood()) return false;
		if (this.topWood !== spec.getTopWood()) return false;
		return true;
	}
}
