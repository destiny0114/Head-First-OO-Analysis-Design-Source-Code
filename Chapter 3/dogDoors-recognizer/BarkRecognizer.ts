import {DogDoor} from './DogDoor';

export class BarkRecognizer {
	private door: DogDoor;

	constructor(door: DogDoor) {
		this.door = door;
	}

	recognize(bark: string): void {
		console.log("   BarkRecognizer: Heard a '" + bark + "'");
		this.door.open();
	}
}
