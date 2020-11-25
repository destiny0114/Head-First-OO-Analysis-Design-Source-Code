export class DogDoor {
	private unlock: boolean;
	private allowedBark: string;

	constructor() {
		this.unlock = false;
		this.allowedBark = '';
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

	setAllowedBark(bark: string): void {
		this.allowedBark = bark;
	}

	getAllowedBark(): string {
		return this.allowedBark;
	}
}
