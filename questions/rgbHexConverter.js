/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */

const rgbToHexConversion = (...rgbValues) => {
	if (rgbValues.length === 3) {
		let hex = rgbValues.map((val) => {
			if (val <= 255) {
				let hexVal = val.toString(16);
				hexVal = hexVal.length == 1 ? `0${hexVal}` : hexVal;

				return hexVal;
			} else {
				throw "Invalid Input";
			}
		});
		return `#${hex.join("")}`;
	} else {
		throw "Invalid Input";
	}
};

// rgbToHexConversion(25, 125, 12);

module.exports = rgbToHexConversion;
