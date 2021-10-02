
const firstDayOfWeek = (date = null) => {
	const d = date ? date : new Date();
	if (d.getDay() === 1) return d;
	else {
		while (d.getDay() !== 1) {
			d.setDate(d.getDate() - 1);
		}
		return d;
	}
}

console.log(firstDayOfWeek())