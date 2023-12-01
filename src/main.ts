import { StringFunctions } from './components/StringFunctions'
import { TopicBoolean } from './components/TopicBoolean'
import { TopicStringsNumbers } from './components/TopicStringsNumbers'
import './style.scss'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

<h1>JavaScript Learn Site</h1>
${TopicStringsNumbers()}
${TopicBoolean()}
${StringFunctions()}

`

