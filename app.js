const yargs=require('yargs')
let command=yargs.argv._[0]
let appNotes=require('./appNotes.js')
let title=yargs.argv.title
let body=yargs.argv.body
let noteprocess
if (process.argv.length < 3)
	{ appNotes.help();
}
else
if(command==='add'){
noteprocess=process.argv[3]
if(noteprocess=='--title')
{
	console.log('adding notes')
	appNotes.addNote(title, body);
	
}
else{
	console.log('Option : \nnode app.js add --title your_title --body todo_body \t to add a note')

}
	
}else
if(command==='remove'){
	noteprocess=process.argv[3]
	if(noteprocess=='--title')
{
	console.log('remove note')
	appNotes.removeNote(title)
	
}
else{
	console.log('Option : \nnode app.js remove --title your_title \t\t\t to remove a note')

}

}
else
if(command==='read'){
	noteprocess=process.argv[3]
	if(noteprocess=='--title')
{
console.log('read note')
appNotes.readNote(title)
	
}
else{
	console.log('Option : \nnode app.js read --title your_title \t\t\t to read a note ')

}
	
}
else
if(command==='list'){
	console.log('show note')
	appNotes.list() 
}
else{
		console.log('this command is unknown !!! ')
		appNotes.help();
}