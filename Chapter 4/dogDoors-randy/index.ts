// Phase 2.1
import {DogDoor} from './DogDoor';
import {BarkRecognizer} from './BarkRecognizer';

const door = new DogDoor();
const recognizer = new BarkRecognizer(door);

door.setAllowedBark('Woof');

console.log('Fido barks to go outside...');
recognizer.recognize('Woof');
console.log('\nFido has gone outside...');
console.log("\nFido's all done...");

setTimeout(() => {
	console.log("...but he's stuck outside!");
	console.log('A small dog starts barking.');
	recognizer.recognize('Yip');
	console.log('\nFido starts barking...');
	recognizer.recognize('Woof');
	console.log("\nFido's back inside...");
}, 10000);
