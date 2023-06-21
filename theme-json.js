const fs = require('fs');
const decache = require('decache');
const path = require('path');
//
let base = require('./json/base.js');
let settings = require('./json/settings.js');
let styles = require('./json/styles.js');
let templateParts = require('./json/templateParts.js');
let customTemplates = require('./json/customTemplates.js');

const workingDir = path.resolve(process.cwd());
const themeRoot = path.resolve(process.cwd(), '../');
const filename = 'theme.json';

// Build Once
buildThemeJSON(base, settings, styles, templateParts, customTemplates);

// Watch for changes
fs.watch(`${workingDir}/json`, () => {
	// Decache the files so we can get the latest version.
	decache('./json/base.js');
	decache('./json/settings.js');
	decache('./json/styles.js');
	decache('./json/templateParts.js');
	decache('./json/customTemplates.js');

	// Re-require the files.
	base = require('./json/base.js');
	settings = require('./json/settings.js');
	styles = require('./json/styles.js');
	templateParts = require('./json/templateParts.js');
	templateParts = require('./json/templateParts.js');
	customTemplates = require('./json/customTemplates.js');

	// Rebuild the theme.json file.
	buildThemeJSON(base, settings, styles, templateParts, customTemplates);
});

/**
 * Build the theme.json file.
 */
function buildThemeJSON(
	base,
	settings,
	styles,
	templateParts,
	customTemplates
) {
	const themeJSON = {
		...base,
		settings,
		styles,
		templateParts,
		customTemplates,
	};
	// Write the file.
	fs.writeFile(
		`${themeRoot}/${filename}`,
		JSON.stringify(themeJSON, null, '\t'),
		(err) => {
			if (!err) {
				console.log('🔥🔥🔥 theme.json updated. 🔥🔥🔥');
			}
		}
	);
}
