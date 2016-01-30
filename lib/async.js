'use strict';

import _ from 'lodash';

function randAsync(v) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const x = _.random(0, 10);
			resolve(`Good ${v}`);
			// if (x % 2) {
			// 	resolve(`Good ${v}`);
			// } else {
			// 	reject(`Bad ${v}`);
			// }
		}, 500);
	});
}

export {randAsync};
