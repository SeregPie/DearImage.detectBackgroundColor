import 'dear-image.detect-color-scheme';
import DearImage from 'dear-image';

let borderWidth = 8;
let maxSize = 256;

DearImage.detectBackgroundColor = function(image) {
	return this.loadFromExcept(image).then(image => {
		image = image.scaleDownIn(maxSize, maxSize);
		let {
			sizeX,
			sizeY,
		} = image;
		image = image.toImageData();
		let {data} = image;
		let xx = sizeX - borderWidth;
		let yy = sizeY - borderWidth;
		for (let x = borderWidth; x < xx; x++) {
			for (let y = borderWidth; y < yy; y++) {
				let i = x * 4 + y * (sizeX * 4);
				data[i + 3] = 0;
			}
		}
		return this.detectColorScheme(image).then(colorScheme => {
			if (colorScheme.length) {
				return colorScheme[0][0];
			}
			return null;
		});
	});
};
