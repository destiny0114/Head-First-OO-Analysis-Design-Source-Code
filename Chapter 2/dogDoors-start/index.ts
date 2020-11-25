// Phase 1
import {DogDoor} from './DogDoor';
import {Remote} from './Remote';

const door = new DogDoor();
const remote = new Remote(door);

console.log('Fido barks to go outside...');
remote.pressButton();

console.log('\nFido has gone outside...');
remote.pressButton();

console.log("\nFido's all done...");
remote.pressButton();

console.log("\nFido's back inside...");
remote.pressButton();
