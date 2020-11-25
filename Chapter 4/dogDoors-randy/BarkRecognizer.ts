import {DogDoor} from './DogDoor';

export class BarkRecognizer {
	private door: DogDoor;

	constructor(door: DogDoor) {
		this.door = door;
	}

	recognize(bark: string): void {
		console.log("   BarkRecognizer: Heard a '" + bark + "'");
		if (this.door.getAllowedBark() === bark) {
			this.door.open();
		} else {
			console.log('This dog is not allowed');
		}
	}
}
