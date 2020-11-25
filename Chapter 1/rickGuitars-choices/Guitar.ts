import {Type} from './Type';
import {Builder} from './Builder';
import {Wood} from './Wood';

export class Guitar {
	private serialNumber: string;
	private price: number;
	private builder: Builder;
	private model: string;
	private type: Type;
	private backWood: Wood;
	private topWood: Wood;

	constructor(serialNumber: string, price: number, builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood) {
		this.serialNumber = serialNumber;
		this.price = price;
		this.builder = builder;
		this.model = model;
		this.type = type;
		this.backWood = backWood;
		this.topWood = topWood;
	}

	getSerialNumber(): string {
		return this.serialNumber;
	}

	getPrice(): number {
		return this.price;
	}

	setPrice(newPrice: number): void {
		this.price = newPrice;
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
