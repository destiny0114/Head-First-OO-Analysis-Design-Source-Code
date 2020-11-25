import {Connection} from './Connection';

export class SubwayPrinter {
	constructor() {}

	printDirections(route: (Connection | null)[]) {
		let connection = route[0];
		let currentLine = connection?.getLineName();
		let previousLine = currentLine;
		if (connection) {
			console.log('Start out at ' + connection.getStation1().getName() + '.');
			console.log('Get on the ' + currentLine + ' heading towards ' + connection.getStation2().getName() + '.');

			for (let i = 1; i < route.length; i++) {
				connection = route[i];
				currentLine = connection?.getLineName();
				if (currentLine === previousLine) {
					console.log('  Continue past  ' + connection?.getStation1().getName() + '...');
				} else {
					console.log('When you get to ' + connection?.getStation1().getName() + ', get off the ' + previousLine + '.');
					console.log('Switch over to the ' + currentLine + ', heading towards ' + connection?.getStation2().getName() + '.');
					previousLine = currentLine;
				}
			}

			console.log('Get off at ' + connection?.getStation2().getName() + ' and enjoy yourself!');
		}
	}
}
