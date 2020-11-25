import {Unit} from './Unit';
import {expect} from 'chai';

describe('Testing Unit Class', () => {
	const unit = new Unit(1000);

	describe('Testing setting/getting the type property.', () => {
		it('should return a type', () => {
			unit.setType('infantry');
			let outputType = unit.getType();
			expect(outputType).to.equal('infantry');
		});
	});

	describe('Testing setting/getting a unit-specific property.', () => {
		it('should be equal with value', () => {
			unit.setProperty('hitPoints', 25);
			let outputValue = unit.getProperty('hitPoints');
			expect(outputValue).to.equal(25);
		});
	});

	describe("Testing getting a non-existent property's value.", () => {
		it('should return with undefined', () => {
			let outputValue = unit.getProperty('strength');
			expect(outputValue).to.equal(undefined);
		});
	});
});
