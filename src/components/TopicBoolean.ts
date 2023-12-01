import employees from '../data/employees.json';

export const TopicBoolean = () => {

	let html = '';
	for (const employee of employees) {
		html += `<p>${employee.firstName} is ${employee.isMarried ? 'married' : 'single'} and ${employee.gender === 'female' ? 'she' : 'he'} ${employee.hasChildren ? 'has children' : "doesn't have children"}.</p>`;
	}

	return /*html*/ `
	<h2>Boolean</h2>
	${html}
	`
}