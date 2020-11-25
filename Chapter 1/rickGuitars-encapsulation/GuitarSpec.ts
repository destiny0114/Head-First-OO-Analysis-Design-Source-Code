import {Type} from './Type';
import {Builder} from './Builder';
import {Wood} from './Wood';

export class GuitarSpec {
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
}
