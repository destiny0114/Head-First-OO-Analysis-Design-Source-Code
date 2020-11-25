// Phase 2.3 (Best Solution)
import {DogDoor} from './DogDoor';
import {BarkRecognizer} from './BarkRecognizer';
import {Bark} from './Bark';

const door = new DogDoor();
door.addAllowedBark(new Bark('rowlf'));
door.addAllowedBark(new Bark('rooowlf'));
door.addAllowedBark(new Bark('rawlf'));
door.addAllowedBark(new Bark('woof'));

const recognizer = new BarkRecognizer(door);

console.log('Fido barks to go outside...');
recognizer.recognize(new Bark('Woof'));
console.log('\nFido has gone outside...');
console.log("\nFido's all done...");

setTimeout(() => {
	console.log("...but he's stuck outside!");
	console.log('A small dog starts barking.');
	recognizer.recognize(new Bark('Yip'));
	console.log('\nFido starts barking...');
	recognizer.recognize(new Bark('woof'));
	console.log("\nFido's back inside...");
}, 10000);
