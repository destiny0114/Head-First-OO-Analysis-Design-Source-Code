// Phase 2
import {Inventory} from './Inventory';
import {Type} from './Type';
import {Builder} from './Builder';
import {Wood} from './Wood';
import {MandolinSpec} from './MandolinSpec';
import {Style} from './Style';
import {GuitarSpec} from './GuitarSpec';

const inventory = new Inventory();
initializeInventory(inventory);

const whatErinLikes = new GuitarSpec(Builder.FENDER, 'Stratocastor', Type.ELECTRIC, 6, Wood.ALDER, Wood.ALDER);
const whatBryanLikes = new MandolinSpec(Builder.FENDER, 'Stratocastor', Type.ELECTRIC, Style.A, Wood.ALDER, Wood.ADIRONDACK);
const matchingInstruments = inventory.search(whatBryanLikes);

if (matchingInstruments) {
	console.log('Bryan, you might like these mandolins: ');
	for (let instrument of matchingInstruments) {
		let instrumentSpec = instrument.getSpec();
		console.log(
			'  We have a ' +
				instrumentSpec.getBuilder() +
				' ' +
				instrumentSpec.getModel() +
				' ' +
				instrumentSpec.getType() +
				' ' +
				instrument.getCategory() +
				'\n' +
				instrumentSpec.getBackWood() +
				' back and sides,\n     ' +
				instrumentSpec.getTopWood() +
				' top.\n  You can have it for only $' +
				instrument.getPrice() +
				'!\n  ----'
		);
	}
} else {
	console.log('Sorry, Erin, we have nothing for you.');
}

function initializeInventory(inventory: Inventory): void {
	inventory.addInstrument('11277', 3999.95, new GuitarSpec(Builder.COLLINGS, 'CJ', Type.ACOUSTIC, 6, Wood.INDIAN_ROSEWOOD, Wood.SITKA));
	inventory.addInstrument('V95693', 1499.95, new GuitarSpec(Builder.FENDER, 'Stratocastor', Type.ELECTRIC, 6, Wood.ALDER, Wood.ALDER));
	inventory.addInstrument('V9512', 1549.95, new GuitarSpec(Builder.FENDER, 'Stratocastor', Type.ELECTRIC, 6, Wood.ALDER, Wood.ALDER));
	inventory.addInstrument('122784', 5495.95, new GuitarSpec(Builder.MARTIN, 'D-18', Type.ACOUSTIC, 6, Wood.MAHOGANY, Wood.ADIRONDACK));
	inventory.addInstrument('76531', 6295.95, new GuitarSpec(Builder.MARTIN, 'OM-28', Type.ACOUSTIC, 6, Wood.BRAZILIAN_ROSEWOOD, Wood.ADIRONDACK));
	inventory.addInstrument('70108276', 2295.95, new GuitarSpec(Builder.GIBSON, 'Les Paul', Type.ELECTRIC, 6, Wood.MAHOGANY, Wood.MAHOGANY));
	inventory.addInstrument('82765501', 1890.95, new GuitarSpec(Builder.GIBSON, "SG '61 Reissue", Type.ELECTRIC, 6, Wood.MAHOGANY, Wood.MAHOGANY));
	inventory.addInstrument('77023', 6275.95, new GuitarSpec(Builder.MARTIN, 'D-28', Type.ACOUSTIC, 6, Wood.BRAZILIAN_ROSEWOOD, Wood.ADIRONDACK));
	inventory.addInstrument('1092', 12995.95, new GuitarSpec(Builder.OLSON, 'SJ', Type.ACOUSTIC, 12, Wood.INDIAN_ROSEWOOD, Wood.CEDAR));
	inventory.addInstrument('566-62', 8999.95, new GuitarSpec(Builder.RYAN, 'Cathedral', Type.ACOUSTIC, 12, Wood.COCOBOLO, Wood.CEDAR));
	inventory.addInstrument('6 29584', 2100.95, new GuitarSpec(Builder.PRS, 'Dave Navarro Signature', Type.ELECTRIC, 6, Wood.MAHOGANY, Wood.MAPLE));

	inventory.addInstrument('X12345', 1745.55, new MandolinSpec(Builder.FENDER, 'Stratocastor', Type.ELECTRIC, Style.A, Wood.ALDER, Wood.ADIRONDACK));
	inventory.addInstrument('X1235', 1445.55, new MandolinSpec(Builder.FENDER, 'Stratocastor', Type.ELECTRIC, Style.A, Wood.ALDER, Wood.ADIRONDACK));
	inventory.addInstrument('Q21457', 1200.55, new MandolinSpec(Builder.COLLINGS, 'OakTown Goove', Type.ACOUSTIC, Style.F, Wood.BRAZILIAN_ROSEWOOD, Wood.CEDAR));
	inventory.addInstrument('S95693', 1699.95, new MandolinSpec(Builder.FENDER, 'Stratocastor', Type.ACOUSTIC, Style.A, Wood.ALDER, Wood.ALDER));
}
