var termPrompt = document.getElementById('prompt')
var commandHistory = []

termPrompt.addEventListener('keypress', e => {
	if (e.key === 'Enter') {
		handleSubmit(e.target.value)
		termPrompt.value = ''
	}
})

const handleSubmit = command => {
	commandHistory.push(command)
	const lineSpan = document.createElement('span')
	const newLinePrompt = document.createElement('p')
	const newLineCommand = document.createElement('p')
	const promptText = document.createTextNode('user@josh $ ')
	const commandText = document.createTextNode(command)
	newLinePrompt.appendChild(promptText)
	newLinePrompt.classList.add('prompt-path')
	newLineCommand.appendChild(commandText)
	newLineCommand.classList.add('prompt-input')
	lineSpan.appendChild(newLinePrompt)
	lineSpan.appendChild(newLineCommand)
	lineSpan.classList.add('prompt-span')
	const termWindow = document.getElementById('window')
	termWindow.insertBefore(
		lineSpan,
		termWindow.children[termWindow.children.length - 1]
	)
}
