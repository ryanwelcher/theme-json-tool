#!/usr/bin/env node
const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const decache = require('decache');
const { scaffoldFiles, buildThemeJSON } = require('./utils.js');

// Set the version and options.
program.version('1.0.0');
program
	.option(
		'-t, --target <string>',
		'The directory to out the theme.json file',
		'./'
	)
	.option(
		'-s, --scaffold',
		'Provide scaffolded files for theme.json sections'
	);

program.parse();

const options = program.opts();
const themeJSONDirectory = path.resolve(`${options.target}theme-json`);

// Handle the scaffolding.
async function init() {
	if (options.scaffold) {
		await scaffoldFiles(themeJSONDirectory);
	}

	// Paths to the requires
	const basePath = `${themeJSONDirectory}/base.js`;
	const settingsPath = `${themeJSONDirectory}/settings.js`;
	const stylesPath = `${themeJSONDirectory}/styles.js`;
	const templatePartsPath = `${themeJSONDirectory}/templateParts.js`;
	const customTemplatesPath = `${themeJSONDirectory}/customTemplates.js`;

	// Watch for changes
	console.log('👀 Watching for changes... 👀');
	fs.watch(themeJSONDirectory, () => {
		// Decache the files so we can get the latest version.
		decache(basePath);
		decache(settingsPath);
		decache(stylesPath);
		decache(templatePartsPath);
		decache(customTemplatesPath);

		// Re-require the files.
		const base = require(basePath);
		const settings = require(settingsPath);
		const styles = require(stylesPath);
		const templateParts = require(templatePartsPath);
		const customTemplates = require(customTemplatesPath);

		// Rebuild the theme.json file.
		buildThemeJSON(
			options.target,
			base,
			settings,
			styles,
			templateParts,
			customTemplates
		);
	});
}
init();
