import {Bark} from './Bark';

export class DogDoor {
	private unlock: boolean;
	private allowedBark: Bark[];

	constructor() {
		this.unlock = false;
		this.allowedBark = [];
	}

	open(): void {
		console.log('The dog door opens.');
		this.unlock = true;

		setTimeout(() => {
			this.close();
		}, 5000);
	}

	close(): void {
		console.log('The dog door closes.');
		this.unlock = false;
	}

	isOpen(): boolean {
		return this.unlock;
	}

	addAllowedBark(bark: Bark): void {
		this.allowedBark.push(bark);
	}

	getAllowedBarks(): Bark[] {
		return this.allowedBark;
	}
}
