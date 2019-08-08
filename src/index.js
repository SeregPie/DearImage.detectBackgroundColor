import DearImage from 'dear-image';

DearImage.detectBackgroundColor = function() {
	return Promise
		.resolve()
		.then(() => {
			return '#ffffff';
		});
};
