export const StringFunctions = () => {

	const companyName = 'Microsoft Germany GmbH';

	return /*html*/ `
	<h2>String Functions</h2>
	<p>The name of the company is <strong>${companyName}</strong> and the company name has ${companyName.length} characters.</p>
	`
}