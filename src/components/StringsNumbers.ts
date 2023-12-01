export const StringsNumbers = () => {

const firstName = 'Georg';
const age = 44;

	return /*html*/ `
	<h2>Strings and Numbers</h2>
<p>${firstName} is ${age}.</p>
<p>Next year, ${firstName} will be ${age+1}.</p>
<p>The variable firstName is of type ${typeof firstName}.</p>
<p>The variable age is of type ${typeof age}.</p>
	`
}