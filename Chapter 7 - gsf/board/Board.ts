import {Tile} from './Tile';
import {Unit} from '../unit/Unit';

export class Board {
	private width: number;
	private height: number;

	private tiles: Tile[][] = [];

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
		this.initialize();
	}

	initialize(): void {
		this.tiles = new Array(this.width);
		for (let i = 0; i < this.width; i++) {
			this.tiles[i] = new Array(this.height);
			for (let j = 0; j < this.height; j++) {
				this.tiles[i][j] = new Tile();
			}
		}
	}

	getTile(x: number, y: number): Tile {
		return this.tiles[x - 1][y - 1];
	}

	addUnit(unit: Unit, x: number, y: number): void {
		let tile = this.getTile(x, y);
		tile.addUnit(tile);
	}

	removeUnit(unit: Unit, x: number, y: number): void {
		let tile = this.getTile(x, y);
		tile.removeUnit(unit);
	}

	removeUnits(x: number, y: number): void {
		let tile = this.getTile(x, y);
		tile.removeUnits();
	}

	getUnits(unit: Unit, x: number, y: number) {
		return this.getTile(x, y).getUnits();
	}
}
