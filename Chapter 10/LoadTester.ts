import {SubwayLoader} from './SubwayLoader';

try {
	const loader = new SubwayLoader();
	const objectville = loader.loadFromFile('ObjectvilleSubway.txt');

	console.log('Testing stations');
	if (objectville.hasStation('DRY Drive') && objectville.hasStation('Weather-O-Rama, Inc.') && objectville.hasStation("Boards 'R' Us")) {
		console.log('... station test passed successfully.');
	} else {
		throw new Error('...station test FAILED.');
	}

	console.log('\nTesting connections...');
	if (
		objectville.hasConnection('DRY Drive', 'Head First Theater', 'Meyer Line') &&
		objectville.hasConnection('LSP Lane', 'JavaBeans Boulevard', 'Booch Line') &&
		objectville.hasConnection('OOA&D Oval', 'Head First Lounge', 'Gamma Line')
	) {
		console.log('...connections test passed succesfully.');
	} else {
		throw new Error('...connections test FAILED');
	}
} catch (e) {
	throw new Error(e);
}
