import {Weapon} from './Weapon';

export class Unit {
	private type: string = '';
	private id: number = 0;
	private name: string = '';
	private weapons: Weapon[] = [];
	public properties: {[key: string]: any} = {};

	constructor(id: number) {
		this.id = id;
	}

	getType(): string {
		return this.type;
	}

	setType(type: string) {
		this.type = type;
	}

	getName(): string {
		return this.name;
	}

	setName(name: string) {
		this.name = name;
	}

	getId() {
		return this.id;
	}

	getWeapons(): Weapon[] {
		return this.weapons;
	}

	addWeapon(weapon: Weapon): void {
		// contract
		if (weapon == null) {
			this.weapons = [];
		}
		this.weapons.push(weapon);
	}

	setProperty(property: string, value: any): void {
		// contract
		if (!Object.keys(this.properties).length) {
			this.properties = {};
		}
		this.properties[property] = value;
	}

	getProperty(property: string): any {
		// contract
		if (!Object.keys(this.properties).length) {
			throw new Error('No properties for this Unit.');
		}
		let value = this.properties[property];
		// contract
		if (value === null) {
			throw new Error('Request for non-existent property.');
		} else {
			return this.properties[property];
		}
	}
}
