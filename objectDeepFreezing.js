const deepFreeze = (anObject) => {
	Object.entries(anObject).forEach(([name, value]) => {
		if (value && typeof value === 'object') {
			deepFreeze(value);
		}
	});
	return Object.freeze(anObject);
};

export { deepFreeze };
