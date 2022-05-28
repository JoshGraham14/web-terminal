var termPrompt = document.getElementById('prompt')
var commandHistory = []
var historyIndex = -1

termPrompt.addEventListener('keypress', e => {
	if (e.key === 'Enter') {
		handleSubmit(e.target.value)
		termPrompt.value = ''
	}
})

termPrompt.addEventListener('keydown', e => {
	if (e.key === 'ArrowUp') {
		if (historyIndex < 0) {
			window.setTimeout(function () {
				termPrompt.setSelectionRange(
					termPrompt.value.length,
					termPrompt.value.length
				)
			}, 0)
		} else {
			termPrompt.value = commandHistory[historyIndex]
			historyIndex--
			window.setTimeout(function () {
				termPrompt.setSelectionRange(
					termPrompt.value.length,
					termPrompt.value.length
				)
			}, 0)
		}
	} else if (e.key === 'ArrowDown') {
		if (historyIndex >= commandHistory.length - 2) {
			termPrompt.value = ''
			window.setTimeout(function () {
				termPrompt.setSelectionRange(
					termPrompt.value.length,
					termPrompt.value.length
				)
			}, 0)
		} else {
			termPrompt.value = commandHistory[historyIndex + 2]
			historyIndex++
			window.setTimeout(function () {
				termPrompt.setSelectionRange(
					termPrompt.value.length,
					termPrompt.value.length
				)
			}, 0)
		}
	}
})

const handleSubmit = command => {
	commandHistory.push(command)
	historyIndex = commandHistory.length - 1
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
