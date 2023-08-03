import _ from 'lodash';

export const scoreCtn = document.querySelector('#scoresTable');

export const renderFunction = (JsonObjectArray) => {
	scoreCtn.innerHTML = '';
	if (JsonObjectArray === null || JsonObjectArray.length === 0) {
		return;
	}
	JsonObjectArray.forEach(element => {
		const scrElmnt = document.createElement('div');
		scrElmnt.classList.add('element');

		const content = document.createElement('p');
		console.log(element.name + element.score);
		content.textContent = element.name + ': ' + element.score;

		scrElmnt.appendChild(content);

		scoreCtn.appendChild(scrElmnt);
	});
};