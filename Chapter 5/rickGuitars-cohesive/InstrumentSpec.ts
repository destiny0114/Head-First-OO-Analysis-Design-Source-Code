export class InstrumentSpec {
	private properties: {[key: string]: any};

	constructor(properties: {[key: string]: any}) {
		if (!Object.keys(properties).length) {
			this.properties = {};
		} else {
			// this.properties = Object.assign({}, properties);
			this.properties = {...properties};
		}
	}

	getProperty(propertyName: string): any {
		return this.properties[propertyName];
	}

	getProperties(): {[key: string]: any} {
		return this.properties;
	}

	matches(spec: InstrumentSpec) {
		for (let propertyName in spec.getProperties()) {
			if (this.properties[propertyName] !== spec.getProperty(propertyName)) return false;
		}
		return true;
	}
}
