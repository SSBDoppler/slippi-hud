'use strict';

// Native
const fs = require('fs');
const path = require('path');

// Ours
const nodecg = require('./util/nodecg-api-context').get();

const templates = nodecg.Replicant('templates');

function refreshTemplates() {

	let templateList = [];

	let templatePath = path.resolve(process.env.NODECG_ROOT, `bundles/${nodecg.bundleName}/graphics/`, `${nodecg.bundleConfig.hudTemplatePath}`);

	//Build template list
	let files = fs.readdirSync(templatePath);

	files.forEach(file => {

		let filePath = templatePath + "/" + file;
		let stats = fs.statSync(filePath);

		if (!stats.isDirectory()) {

			let template = {
				fileName: file,
				fullPath: filePath
			};

			templateList.push(template);
		}
	});
	
	templates.value.availableTemplates = templateList;

	//Default to first found template if none is selected
	if (templates.value.activeTemplate.index < 0 || !templates.value.activeTemplate.name) {
		templates.value.activeTemplate.index = 0;
		templates.value.activeTemplate.name = templateList[0].fileName;
	}
	else {
		//Find active template again
		let index = 0;

		let targetTemplate = templateList.find(template => {

			if (template.fileName === templates.value.activeTemplate.name) {
				templates.value.activeTemplate.index = index;
				return true;
			}

			index++;
			return false;
		});

		//Default to first template if current template was deleted
		if (!targetTemplate) {
			templates.value.activeTemplate.index = 0;
			templates.value.activeTemplate.name = templateList[0].fileName;
		}
	}
}

refreshTemplates();
