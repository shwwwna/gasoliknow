const format = (value, decimalPlaces = 2) =>
	(+value).toLocaleString("en-US", {
		minimumFractionDigits: decimalPlaces,
		maximumFractionDigits: decimalPlaces,
	});
export default format;
