const inputElement = document.getElementById("inputpara")
const resultElement= document.getElementById("result")

function convertToUpperCase(){
    const inputvalue= inputElement.value
   outputText= inputvalue.toUpperCase()
   resultElement.textContent = outputText


}

function convertToLowerCase(){
        const inputvalue= inputElement.value
   outputText= inputvalue.toLowerCase()
   resultElement.textContent = outputText

}

function checkPalindrom(){
 const inputvalue= inputElement.value
 reverseSTR =''
 for(let i=inputvalue.length-1; i>=0; i--){
    reverseSTR= reverseSTR + inputvalue[i]
 }
 if(inputvalue== reverseSTR){
    outputText="It Is Palindrom"
 }
 else{
    outputText= "It Is Not Palindrom"
 }
 resultElement.textContent=outputText
 
}

function countVolues(){
 const inputvalue= inputElement.value
 count=0
 volues="aeiou"
 len= inputvalue.length


 for(i=0; i<len; i++){
    inputvalue[i]
    if(volues.includes(inputvalue[i])){
        count ++
    }
 }
  resultElement.textContent="Volues Count:" +count
 
}



function CountConsonents()
{
    const inputvalue= inputElement.value
    count=0

    for(i=0; i<inputvalue.length; i++){
      ch=inputvalue[i].toLowerCase();
      if(ch>='a' && ch<='z' &&
         ch !=='a' &&ch !=='e' &&ch !=='i' && ch!== 'o' && ch !=='u')
         {
            count ++;
         } 
      
    }

    resultElement.textContent="Consonants Count:" +count

}


function convertToCamaleCase(){
const inputvalue= inputElement.value.trim()

if(inputvalue === ""){
   resultElement.textContent = "enter some text"
   return;
}
    const words = inputvalue.toLowerCase().split(" ");
    camelCase = words[0]
    for(i=1; i< words.length; i++){
      camelCase  += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    resultElement.textContent = camelCase

}

function extractFirstWord(){
   const inputvalue= inputElement.value.trim()

    if (inputvalue === "") {
        resultElement.textContent = "Please enter some text.";
        return;
    }

    const firstWord = inputvalue.split(/\s+/)[0];

    resultElement.textContent = "First Word: " + firstWord;

}


function countLines() {
    const inputvalue = inputElement.value.trim();

    if (inputvalue === "") {
        resultElement.textContent = "Number of Lines: 0";
        return;
    }

    const lines = inputvalue.split("\n");
    const lineCount = lines.length;

    resultElement.textContent = "Number of Lines: " + lineCount;
}


  function replaceSpacesWithHyphens()  {
    const inputvalue = inputElement.value.trim();

    if (inputvalue === "") {
        resultElement.textContent = "Please enter some text.";
        return;
    }

    const outputText = inputvalue.replaceAll(" ", "-");

    resultElement.textContent = outputText;
}

function extractSpecialCharacters() {
    const inputvalue = inputElement.value;

    if (inputvalue.trim() === "") {
        resultElement.textContent = "Please enter some text.";
        return;
    }

    // Extract all special characters
    const specialChars = inputvalue.match(/[^a-zA-Z0-9\s]/g);

    if (specialChars) {
        resultElement.textContent =
            "Special Characters: " + specialChars.join(" ");
    } else {
        resultElement.textContent = "No Special Characters Found.";
    }
}


function countSpaces() {
    const inputvalue = inputElement.value;

    let count = 0;

    for (let i = 0; i < inputvalue.length; i++) {
        if (inputvalue[i] === " ") {
            count++;
        }
    }

    resultElement.textContent = "Number of Spaces: " + count;
}


function splitWords() {
    const inputvalue = inputElement.value.trim();

    if (inputvalue === "") {
        resultElement.textContent = "Please enter some text.";
        return;
    }

    const words = inputvalue.split(/\s+/);

    resultElement.innerHTML = "";

    for (let i = 0; i < words.length; i++) {
        resultElement.innerHTML += words[i] + "<br>";
    }
}