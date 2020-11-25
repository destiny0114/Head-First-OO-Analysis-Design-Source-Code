// Phase 2
import {DogDoor} from './DogDoor';
import {Remote} from './Remote';

const door = new DogDoor();
const remote = new Remote(door);

console.log('Fido barks to go outside...');
remote.pressButton();

console.log('\nFido has gone outside...');

console.log("\nFido's all done...");

console.log("\nFido's back inside...");
