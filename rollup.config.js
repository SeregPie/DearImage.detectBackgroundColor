import {terser} from 'rollup-plugin-terser';
import buble from 'rollup-plugin-buble';

import {main} from './package.json';

let globals = {
	'dear-image': 'DearImage',
};

export default {
	external: [
		...Object.keys(globals),
		'dear-image.detect-color-scheme',
	],
	input: 'src/index.js',
	plugins: [
		buble(),
		terser(),
	],
	output: {
		file: main,
		format: 'umd',
		globals,
	},
};
