const notAStringMessage = "Not a string. Please provide an argument that is a string."
const noLetterString = "Please write a string that has letters in it."
const zeroLengthStringMessage = "Please write a string 1 or more characters long."

function hasVowels(string){
    let word = string.toLowerCase()
    //If string has vowel in it return true
    if(/[aeiouy]/.test(word)){
        return true
    //String is not a,e,i,o,u nor does it contain those vowels, so return false
	} else {
		return false
    }
}

function isAValidString(string){
    //First check if the argument is even a string
    if(typeof string!== "string"){return notAStringMessage}
        //code below means this is a string
        
        //Check if the string actually has content
        if (string.length === 0){return zeroLengthStringMessage}
        
        //Check if the content within the string contains letters
        if(/[a-zA-Z]/.test(string) === false){return noLetterString}
        //Alternatively can use /[a-z]/i, i being the case-insensitive flag 

        //If none of the conditionals are true, can return true
        return true
    }

function vowelCut(string){
	//if not a valid string, return error message
	if (isAValidString(string) === notAStringMessage || isAValidString(string) === zeroLengthStringMessage || isAValidString(string) === noLetterString){ return isAValidString(string)}
	//Alternatively could do [zeroLengthStringMessage,noLetterString,notAStringMessage].includes(isAValidString("!"))
    //For readability, could create another helper function that uses this code 

    //Valid string. First check if it has vowels

	if (hasVowels(string)){
		if(string.length == 1){
		//if it is return empty string (AEIOUY as single chars counted as vowels, so cut and return empty string
			return ""
        } else {	
        // string must be >> length 1
        
        //Split string so it's a sequence of characters (ex. "Well hi!" => ["W","e","l","l"," ","h","i","!"])
        let characterArray = string.split("")
        //Return a new array by subjecting each character to a function via map
        //Function: If the character is a vowel (lowercase or caps), convert it to a "" (if not leave as is)
        return characterArray.map(character => {
            if(/[aeiouyAEIOUY]/.test(character)){
                character = ""
            } else {return character}
        //Now join the strings together using empty strings as the delimiter
        //This means any empty strings are removed from the array, and the conseqeunting array is joined into a new string
        //ex. "Well hi!" -> ["W"," ", "l", "l", " ", "h", " ", "!"] joins to become "Wll h!"
        }).join("")

        // Accounting for extra spaces--if you're a Medium reader, ignore this as I'm not sure this code would work correctly.
        // At end of .join("")
        // .split(" ").filter(char => char!=="").join(" ")

        } 
    } else {return string}
}
