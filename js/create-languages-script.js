// Get the language data from the translations API
async function getTranslations() {
	const response = await fetch('https://api.getbible.net/v2/translations.json');
	const translations = await response.json();
	// console.log(translations);

	const ob = [];

	for (const key in translations) {
		if (translations.hasOwnProperty(key)) {
			const translation = translations[key];
			ob.push({ 
				name: translation.language ? translation.language + ': ' + translation.translation : '' + translation.translation, 
				apiName: translation.abbreviation 
			});
		}
	}

	ob.sort((a, b) => (a.name > b.name) ? 1 : -1);
	
	console.log(ob); // copy data from here to js/api-languages-v2.min.js
}

getTranslations();
