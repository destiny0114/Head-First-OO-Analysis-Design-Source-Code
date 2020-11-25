export class DogDoor {
	private unlock: boolean;

	constructor() {
		this.unlock = false;
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
}
