import {SubwayLoader} from './SubwayLoader';
import {SubwayPrinter} from './SubwayPrinter';

const loader = new SubwayLoader();
const objectville = loader.loadFromFile('ObjectvilleSubway.txt');

const route = objectville.getDirections('XHTML Expressway', 'JSP Junction');

const printer = new SubwayPrinter();
printer.printDirections(route);
