let assert = require('assert').strict;

require('./index');
let DearImage = require('dear-image');

(async () => {
	let backgroundColor = await DearImage.detectBackgroundColor('./images/paper-clips.png');
	assert.equal(backgroundColor, '#fe712c');
})();
