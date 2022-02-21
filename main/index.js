const fs = require('fs');

const acceptable_words_file = "../AcceptableWordlist.txt";
const answer_words_file = "../AnswerWordlist.txt";

function WordsInList(wordList){
	let wordCount = 0;

	try {
		// read contents of the file
		const data = fs.readFileSync(acceptable_words_file, 'UTF-8');
	
		// split the contents by new line
		const lines = data.split(/\r?\n/);

		// redefine the word count to the number of lines
		wordCount = lines.length;
	
		// print all lines
		// lines.forEach((line) => {
		// 	console.log(line);
		// });
	} catch (err) {
		console.error(err);
	}
	
	return wordCount;
}

function FindNewWord(wordList){
	let wordCount = WordsInList(wordList);
	let randomLine = Math.random() * wordCount - 1;

}

console.log(WordsInList(acceptable_words_file));