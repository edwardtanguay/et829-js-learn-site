import employees from '../data/employees.json';

export const TopicBoolean = () => {

	const employee = employees[0];

	return /*html*/ `
	<h2>Boolean</h2>
	<p>${employee.firstName} is ${employee.isMarried ? 'married' : 'single'} and ${employee.gender === 'female' ? 'she' : 'he'} ${employee.hasChildren ? 'has children' : "doesn't have children"}.</p>	
	`
}