import {DogDoor} from './DogDoor';

export class Remote {
	private door: DogDoor;

	constructor(door: DogDoor) {
		this.door = door;
	}

	pressButton() {
		console.log('Pressing the remote control button...');
		if (this.door.isOpen()) {
			this.door.close();
		} else {
			this.door.open();
		}
	}
}
