import {DogDoor} from './DogDoor';
import {Bark} from './Bark';

export class BarkRecognizer {
	private door: DogDoor;

	constructor(door: DogDoor) {
		this.door = door;
	}

	recognize(bark: Bark): void {
		console.log("   BarkRecognizer: Heard a '" + bark.getSound() + "'");
		let allowedBarks = this.door.getAllowedBarks();
		for (let allowedbark of allowedBarks) {
			if (allowedbark.equals(bark)) {
				this.door.open();
				return;
			}
		}
		console.log('This dog is not allowed');
	}
}
