const path = require("path");
const fs = require("fs");

function findNodecgRoot(dir) {

	const filePath = path.join(dir, 'bundles');

	if (fs.existsSync(filePath)) {
		return path.dirname(filePath);
	}

	const parentDir = path.dirname(dir);

	if (dir === parentDir) {
		return '';
	}

	return findNodecgRoot(parentDir);
}

module.exports = {
	findNodecgRoot: () => {
		return findNodecgRoot(__dirname);
	}
}