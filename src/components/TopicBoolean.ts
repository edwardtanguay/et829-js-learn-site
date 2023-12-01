import employees from '../data/employees.json';

export const TopicBoolean = () => {

	const employee = employees[0];

	return /*html*/ `
	<h2>Boolean</h2>
	<p>${firstName} is ${isMarried ? 'married' : 'single'} and ${gender !== 'female' ? 'she' : 'he'} ${hasChildren ? 'has children' : "doesn't have children"}.</p>	
	`
}