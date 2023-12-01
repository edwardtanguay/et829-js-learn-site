import { StringsNumbers } from './components/StringsNumbers'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

<h1>JavaScript Learn Site</h1>
${StringsNumbers()}

`

