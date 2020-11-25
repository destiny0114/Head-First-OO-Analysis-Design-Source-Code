import {Unit} from './Unit';
import {UnitGroup} from './UnitGroup';

const unit = new Unit(1000);
unit.setProperty('hitPoints', 25);

const unit2 = new Unit(2000);
unit2.setProperty('hitPoints', 35);

const group = new UnitGroup([unit]);
group.addUnit(unit2);
group.removeUnit(unit2);
group.getUnit(1000);
console.log(group.getUnits());
console.log(unit.properties);
