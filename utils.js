const fs = require('fs');

function scaffoldFiles(folderName) {
	try {
		// Create the directory if it doesn't exist.
		if (!fs.existsSync(folderName)) {
			fs.mkdirSync(folderName);
			// Copy the files from the template
			fs.cp(
				`${__dirname}/__templates`,
				folderName,
				{ recursive: true },
				(err) => {
					if (err) {
						console.error(err);
					}
				}
			);
			console.log(`🔥🔥🔥 Files scaffolded into ${folderName} 🔥🔥🔥`);
		} else {
			console.log(`${folderName} directory already exists`);
		}
	} catch (err) {
		console.error(err);
	}
}

function buildThemeJSON(
	target,
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
		`${target}/theme.json`,
		JSON.stringify(themeJSON, null, '\t'),
		(err) => {
			if (!err) {
				console.log('🔥🔥🔥 theme.json updated. 🔥🔥🔥');
			}
		}
	);
}

module.exports = {
	scaffoldFiles,
	buildThemeJSON,
};
