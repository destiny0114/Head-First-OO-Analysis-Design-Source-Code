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
		if (weapon == null) {
			this.weapons = [];
		}
		this.weapons.push(weapon);
	}

	setProperty(property: string, value: any): void {
		if (!Object.keys(this.properties).length) {
			this.properties = {};
		}
		this.properties[property] = value;
	}

	getProperty(property: string): any {
		if (!Object.keys(this.properties).length) {
			return null;
		}
		return this.properties[property];
	}
}
