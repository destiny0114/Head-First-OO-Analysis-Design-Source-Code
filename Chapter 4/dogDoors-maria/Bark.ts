export class Bark {
	private sound: string;

	constructor(sound: string) {
		this.sound = sound;
	}

	getSound(): string {
		return this.sound;
	}

	equals(bark: Bark): boolean {
		if (bark instanceof Bark) {
			let otherBark = bark;
			if (this.sound.toUpperCase() === otherBark.sound.toUpperCase()) {
				return true;
			}
		}
		return false;
	}
}
