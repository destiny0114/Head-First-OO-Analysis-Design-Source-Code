export class Station {
	private name: string;

	constructor(name: string) {
		this.name = name;
	}

	getName(): string {
		return this.name;
	}

	equals(obj: any): boolean {
		if (obj instanceof Station) {
			const otherStation = obj;
			if (otherStation.getName().toUpperCase() === this.name.toUpperCase()) {
				return true;
			}
		}
		return false;
	}

	hashCode(): number {
		for (var i = 0, h = 0; i < this.name.toLowerCase().length; i++) {
			h = (Math.imul(31, h) + this.name.toLowerCase().charCodeAt(i)) | 0;
		}
		return h;
	}
}
