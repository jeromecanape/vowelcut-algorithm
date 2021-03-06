//Medium Readers: You'll notice a lot more comments here than in the article. They pretty much reiterate what the article says or help visualize certain activity.

// Endpoints
// -Make sure string used for argument in the first place, otherwise error message 

// -If string.length === 0 return error message

// -If string does not contain any alphabetical characters return error message

// -Return “” if the string is A E I O U or Y

// -Return the same string if that string.length === 1 && is not a vowel

// -Take a string like “Princess Peach is the best.” and return it as “Prncss Pch s th bst.” Meaning that case must be preserved.

const notAStringMessage = "Not a string. Please provide an argument that is a string."
const noLetterString = "Please write a string that has letters in it."
const zeroLengthStringMessage = "Please write a string 1 or more characters long."

function hasVowels(string){
    let word = string.toLowerCase()
	if(/[aeiou]/.test(word)){
		return true
	} else if (word.includes("y") && YIsAVowel(word)){
		return true
	} else {
        return false
    }
}

function cutEndPunc(string){
    //look for a bunch of special characters at the end of a string
    // Medium readers: There's a MUCH simpler regex we can use here
    // Hint: You might possibly use the $ character. Remember character classes also be used for exclusionary reasons.
	let punctuation = /[.,\/'"#@[!$%\^&\*;\]:{}=\-_`~()\+\?\d]/
	
	if (punctuation.test(string.charAt(string.length-1))){
		// if last char in the string is punctuation remove the last punctuation 
		string = string.substring(0, string.length - 1);
		//Using recursion repeat as necessary
		return cutEndPunc(string)
	}
	return string
}

//Leave this commented out! 
//This is the composition of YIsAVowel BEFORE incorporating cutEndPunc

// function YIsAVowel(string){
//     //First let's lowercase the string so it's easier to check out
//     let stringLowercase = string.toLowerCase()
// 	if(stringLowercase.charAt(stringLowercase.length-1) === "y") {
// 		//stringLowercase/word ends in Y means Y is a vowel
// 		//This also accounts for a stringLowercase of just Y
// 		return true
// 	} else if(!/[aeiou]/.test(stringLowercase) && stringLowercase.includes("y")) {
// 		//If stringLowercase/word has no other vowels and Y is present, Y is a vowel
// 		return true
//     } else {
// 		//stringLowercase does not end in Y, and has other vowels 
// 		return false
// 	}
// }


function YIsAVowel(string){
	//First let's cut all punctuation off end of string
	let stringWithNoEndPunc = cutEndPunc(string.toLowerCase())
	if(stringWithNoEndPunc.charAt(stringWithNoEndPunc.length-1) === "y") {
		//stringWithNoEndPunc/word ends in Y means Y is a vowel
		//This also accounts for a stringWithNoEndPunc of just Y
		return true
	} else if(!/[aeiou]/.test(stringWithNoEndPunc) && stringWithNoEndPunc.includes("y")) {
		//If string/word has no other vowels and Y is present, Y is a vowel
		return true
    } else {
		//string does not end in Y, and has other vowels bicycle symphony yams
		return false
	}
}

function isAValidString(string){
    if(typeof string!== "string"){return notAStringMessage}
	
	if (string.length === 0){return zeroLengthStringMessage}
	
	if(/[a-zA-Z]/.test(string) === false){return noLetterString}
	
	return true
}

function vowelCut(string){
	if (isAValidString(string) === notAStringMessage || isAValidString(string) === zeroLengthStringMessage || isAValidString(string) === noLetterString){ return isAValidString(string)}

	if (string.length == 1){
		if(hasVowels(string)){
			return ""
        } else {
			return string
		}
	} else if(!hasVowels(string)){
		return string
	}
	
	//This means string is >1 and has vowels

	//Account for Y being a vowel by first splitting array into words
	let wordArray = string.split(" ")

	//check if each word has Y as a vowel
	//Return new string where all Ys present are NOT vowels
	let stringWithYAsVowelRemoved = wordArray.map(word => {
		//see if each word has Y as a letter
	//If Y is in the word, determine if it is a vowel
		if (/[yY]/.test(word)){
			if (YIsAVowel(word)){
				// console.log("Y is a vowel, excising.")
				return word.replace(/[yY]/, "")
			} else {return word}
		} else {return word}
	}).join(" ")

	let characterArray = stringWithYAsVowelRemoved.split("")

	return characterArray.map(character => {
		if(/[aeiouAEIOU]/.test(character)){
			character = ""
		} else {return character}
	}).join("")
}


