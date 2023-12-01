export const TopicBoolean = () => {

	const firstName = 'Maria';
	const isMarried = false;

	return /*html*/ `
	<h2>Boolean</h2>
	<p>${firstName} is ${isMarried ? 'married' : 'single'}.</p>	
	`
}