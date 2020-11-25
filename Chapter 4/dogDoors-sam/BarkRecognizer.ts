import {DogDoor} from './DogDoor';
import {Bark} from './Bark';

export class BarkRecognizer {
	private door: DogDoor;

	constructor(door: DogDoor) {
		this.door = door;
	}

	recognize(bark: Bark): void {
		console.log("   BarkRecognizer: Heard a '" + bark + "'");
		if (this.door.getAllowedBark()?.equals(bark)) {
			this.door.open();
		} else {
			console.log('This dog is not allowed');
		}
	}
}
