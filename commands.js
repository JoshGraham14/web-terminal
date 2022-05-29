const helpCommand = () => {
	const title = document.createElement('p')
	const titleText = document.createTextNode('Commands: ')
	title.appendChild(titleText)

	const div = document.createElement('div')
	div.classList.add('tabbed')
	const aboutCommand = document.createElement('p')
	const projectsCommand = document.createElement('p')
	const contactCommand = document.createElement('p')
	const helpCommand = document.createElement('p')

	const aboutText = document.createTextNode('about')
	const projectsText = document.createTextNode('projects')
	const contactText = document.createTextNode('contact')
	const helpText = document.createTextNode('help')

	aboutCommand.appendChild(aboutText)
	projectsCommand.appendChild(projectsText)
	contactCommand.appendChild(contactText)
	helpCommand.appendChild(helpText)

	let commands = [aboutCommand, projectsCommand, contactCommand, helpCommand]

	commands.forEach(command => {
		command.classList.add('alt-colour')
		div.appendChild(command)
	})

	const termWindow = document.getElementById('window')
	termWindow.insertBefore(
		title,
		termWindow.children[termWindow.children.length - 1]
	)
	termWindow.insertBefore(
		div,
		termWindow.children[termWindow.children.length - 1]
	)
}
