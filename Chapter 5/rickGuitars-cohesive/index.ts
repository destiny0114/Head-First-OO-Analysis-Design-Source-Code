// Phase 3
import {Inventory} from './Inventory';
import {Style} from './Style';
import {Type} from './Type';
import {Builder} from './Builder';
import {Wood} from './Wood';
import {InstrumentSpec} from './InstrumentSpec';
import {InstrumentType} from './InstrumentType';

const inventory = new Inventory();
initializeInventory(inventory);

const property: {[key: string]: any} = {};
property['instrumentType'] = InstrumentType.MANDOLIN;
property['type'] = Type.ELECTRIC;

const whatBryanLikes = new InstrumentSpec(property);
const matchingInstruments = inventory.search(whatBryanLikes);

if (matchingInstruments.length) {
	console.log('Bryan, you might like these instruments: ');
	for (let instrument of matchingInstruments) {
		let instrumentSpec = instrument.getSpec();
		console.log('We have a ' + instrumentSpec.getProperty('instrumentType') + ' with the following properties:');

		for (let propertyName in instrumentSpec.getProperties()) {
			if (propertyName === 'instrumentType') continue;
			console.log('    ' + propertyName.charAt(0).toUpperCase() + propertyName.slice(1) + ': ' + instrumentSpec.getProperty(propertyName));
		}

		console.log('  You can have this ' + instrumentSpec.getProperty('instrumentType') + ' for $' + instrument.getPrice() + '\n----');
	}
} else {
	console.log('Sorry, Bryan, we have nothing for you.');
}

function initializeInventory(inventory: Inventory): void {
	let properties: {[key: string]: any} = {};

	properties['instrumentType'] = InstrumentType.GUITAR;
	properties['builder'] = Builder.COLLINGS;
	properties['model'] = 'CJ';
	properties['type'] = Type.ACOUSTIC;
	properties['numStrings'] = 6;
	properties['topWood'] = Wood.INDIAN_ROSEWOOD;
	properties['backWood'] = Wood.SITKA;
	inventory.addInstrument('11277', 3999.95, new InstrumentSpec(properties));

	properties['builder'] = Builder.FENDER;
	properties['model'] = 'Stratocastor';
	properties['type'] = Type.ACOUSTIC;
	properties['numStrings'] = 6;
	properties['topWood'] = Wood.ALDER;
	properties['backWood'] = Wood.ALDER;
	inventory.addInstrument('V95693', 1499.95, new InstrumentSpec(properties));
	inventory.addInstrument('V9512', 1549.95, new InstrumentSpec(properties));

	properties['builder'] = Builder.MARTIN;
	properties['model'] = 'D-18';
	properties['type'] = Type.ACOUSTIC;
	properties['numStrings'] = 6;
	properties['topWood'] = Wood.MAHOGANY;
	properties['backWood'] = Wood.ADIRONDACK;
	inventory.addInstrument('122784', 5495.95, new InstrumentSpec(properties));

	properties['model'] = 'OM-28';
	properties['topWood'] = Wood.BRAZILIAN_ROSEWOOD;
	properties['backWood'] = Wood.ADIRONDACK;
	inventory.addInstrument('76531', 6295.95, new InstrumentSpec(properties));

	properties['builder'] = Builder.GIBSON;
	properties['model'] = 'Les Paul';
	properties['type'] = Type.ELECTRIC;
	properties['numStrings'] = 6;
	properties['topWood'] = Wood.MAHOGANY;
	properties['backWood'] = Wood.MAHOGANY;
	inventory.addInstrument('70108276', 2295.95, new InstrumentSpec(properties));

	properties['model'] = "SG '61 Reissue";
	inventory.addInstrument('82765501', 1890.95, new InstrumentSpec(properties));

	properties['builder'] = Builder.MARTIN;
	properties['model'] = 'D-28';
	properties['type'] = Type.ACOUSTIC;
	properties['topWood'] = Wood.BRAZILIAN_ROSEWOOD;
	properties['backWood'] = Wood.ADIRONDACK;
	inventory.addInstrument('77023', 6275.95, new InstrumentSpec(properties));

	properties['builder'] = Builder.OLSON;
	properties['model'] = 'SJ';
	properties['type'] = Type.ACOUSTIC;
	properties['numStrings'] = 12;
	properties['topWood'] = Wood.INDIAN_ROSEWOOD;
	properties['backWood'] = Wood.CEDAR;
	inventory.addInstrument('1092', 12995.95, new InstrumentSpec(properties));

	properties['builder'] = Builder.RYAN;
	properties['model'] = 'Cathedral';
	properties['topWood'] = Wood.COCOBOLO;
	inventory.addInstrument('566-62', 8999.95, new InstrumentSpec(properties));

	properties['builder'] = Builder.PRS;
	properties['model'] = 'Dave Navarro Signature';
	properties['type'] = Type.ELECTRIC;
	properties['numStrings'] = 6;
	properties['topWood'] = Wood.MAHOGANY;
	properties['backWood'] = Wood.MAPLE;
	inventory.addInstrument('6 29584', 2100.95, new InstrumentSpec(properties));

	properties['instrumentType'] = InstrumentType.MANDOLIN;
	properties['builder'] = Builder.FENDER;
	properties['model'] = 'Stratocastor';
	properties['type'] = Type.ELECTRIC;
	properties['style'] = Style.A;
	properties['topWood'] = Wood.ALDER;
	properties['backWood'] = Wood.ADIRONDACK;
	delete properties.numStrings;
	inventory.addInstrument('X12345', 1745.55, new InstrumentSpec(properties));
	inventory.addInstrument('X1235', 1445.55, new InstrumentSpec(properties));

	properties['builder'] = Builder.COLLINGS;
	properties['model'] = 'OakTown Goove';
	properties['type'] = Type.ACOUSTIC;
	properties['style'] = Style.F;
	properties['topWood'] = Wood.BRAZILIAN_ROSEWOOD;
	properties['backWood'] = Wood.CEDAR;
	inventory.addInstrument('Q21457', 1200.55, new InstrumentSpec(properties));

	properties['builder'] = Builder.FENDER;
	properties['model'] = 'Stratocastor';
	properties['style'] = Style.A;
	properties['topWood'] = Wood.ALDER;
	properties['backWood'] = Wood.ALDER;
	inventory.addInstrument('S95693', 1699.95, new InstrumentSpec(properties));
}
