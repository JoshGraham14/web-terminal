var termPrompt = document.getElementById('prompt')

termPrompt.addEventListener('keypress', e => {
	if (e.key === 'Enter') {
		handleSubmit(e.target.value)
		termPrompt.value = ''
	}
})

const handleSubmit = command => {
	console.log(command)
}
