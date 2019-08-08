let assert = require('assert');

require('./index');
let DearImage = require('dear-image');

(async () => {
	let imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Milka_Logo.svg/220px-Milka_Logo.svg.png';
	let imageBackgroundColor = await DearImage.detectBackgroundColor(imageUrl);
	assert.strictEqual(imageBackgroundColor, '#ffffff');
})();
