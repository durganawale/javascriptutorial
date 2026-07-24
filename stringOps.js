//capitalize

strpara = "small efferts today lead to big achivement tommorow"

function convertToUpperCase(str){
    return str.toUpperCase(str)

}
strUpperCase = convertToUpperCase(strpara)

console.log(strUpperCase)

// LowerCase
str = "small efferts today lead to big achivement tommorow"

function convertToLowerCase(str){
    return str.toLowerCase(str)

}
strLowerCase = convertToLowerCase(str)

console.log(strLowerCase)

//Extract the world

const extractFirstWorld=(str)=>{
    return str.charAt(0)(str)
}

firstLetter = extractFirstWorld(strpara)
console.log(firstLetter)

//spit
const splitArray =(str)=> {
    return str.split(" ")
}
arrayOfWorlds = splitArray(strpara)

console.log(arrayOfWorlds)


//replace with (-)
function spaceWithHyphen(str){
    arrayWorlds= str.split (" ")
    strWithHyphens = arrayWorlds.join("-")
    return strWithHyphens
    
}
strHypens = spaceWithHyphen(strpara)
console.log(strHypens)


//spaceWithHyphen

function spaceWithHyphen(str) {
    return str.replaceAll(" ", "-");
}
let strpara="hello javascript World"
let strHypens = spaceWithHyphen(strpara);
console.log(strHypens);


function matchFarstAndLast(str){
    fristChar = str.charAt(0)
    lastChar = str.charAt(str.length - 1)
    if(fristChar == lastChar){
        return 'a string and end with the same character'
    }
    else {
     return 'a string and end with the Different  character'

    }

}
matChar= matchFarstAndLast(strpara)
console.log(matChar)


function reverseString(str){
    reverSTR=''
    for (let i=str.length-1; i>0; i--){
        reverSTR = reverSTR + str[i]
    }
    return reverSTR
}
reverseOutput = reverseString(strpara)
console.log(reverseOutput)


function isPalindrome(str){

        reverSTR = " ";

    for (let i=str.length-1; i>=0; i--){
        reverSTR += str[i]
    }

        if (str === reverSTR){
    return "ispalindrom"
         }
    else{
        return "isnotPalindrom"
    }
  
}
result=isPalindrome("madam");
console.log(result)


function countCharacter(str , char){
    count=0;
    for (let i=0; i< str.length; i++){
        if (str[i] === char){
            count++;
    }
    }
    return count;
}
console.log(countCharacter ("hello world", "o"));

function removeNonAlphanumeric(str){
    let result = ""
    for (let i=0; i < str.length; i++){
        if ((str[i]>= "a"&& str[i]<="Z") || (str[i]>="A" && str[i]<="Z")
            (str[i] >="0" && str [i]<="9")){
        result += str [i]
}     
    }
    return result
}
console.log(removeNonAlphanumeric("Hello, World! 123."))