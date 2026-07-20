let age=18;

if (age <= 18)
{
    console.log("You are a minor");
}
else if (age ===18 ){
    console.log("You just become a Adult!");
}
else{
    console.log("You are an Adult");
}


let day=3;

switch(day)
{
    case 1:
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;

    case 3 :
        console.log("Monday");
        break;
        default :
         console.log("Invalidday");

}


for (let i=1; i<=5; i++){
    console.log("Iteration:",i);
}

let count=1;
while(count <=3){
    console.log("count:",count);
    count++;
}

let num=6;
do{
    console.log("number:",num);
    num--;
}
   while(num>0);


   let number=5;
   let factorial = 1;

   for (i=1 ; i<=number ; i++)
   {
    factorial=factorial*i;
    console.log(i,factorial)
   }

   console.log("factorial of",number,"is",factorial)

   if(factorial<10)
   {
    console.log("The factorial is small");

   }
   else if(factorial>=10 && factorial<=100){
    console.log("The factorial is moderate");
   }
   else{
    console.log("the factorial is Large");
   }




   for (i=1; i<=20; i++){
    if(i % 2 == 0){
        console.log(i)
    }
   }

    
      for (i=1; i<=50; i++){
    
     if (i % 5===0 &&   i % 3===0){
        console.log("FizzBuzz");
      }
      else if(i %3===0){
        console.log("Buzz");
      }
      else if (i % 5===0 ){
        console.log( "Fizz");
      }
      else{
        console.log(i);
      }

   }


let num1 = 17;
let isPrime = true;

console.log("Enter the number",num1);

if (num1 <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num1; i++) {
        if (num1 % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num1 + " is a Prime Number");
} else {
    console.log(num1 + " is Not a Prime Number");
}
   

    

   

for(i=1; i<=5; i++){
      let row="";
    for(j=1; j<=i; j++)
    {
        row +="*"
    }
    
        console.log( row);

}



const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string: ", function (str) {
  let vowels = 0;
  let consonants = 0;

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= 'a' && ch <= 'z') {
      if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
        vowels++;
      } else {
        consonants++;
      }
    }
  }

  console.log("Vowels:", vowels);
  console.log("Consonants:", consonants);

  rl.close();
});





const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function (num) {
  num = parseInt(num);

  let reverse = 0;

  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }

  console.log("Reversed Number:", reverse);

  rl.close();
});



const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the limit: ", function (n) {
  n = parseInt(n);

  let evenSum = 0;
  let oddSum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }

  console.log("Sum of Even Numbers:", evenSum);
  console.log("Sum of Odd Numbers:", oddSum);

  rl.close();
});



function generatePyramid(row){
    for(let i=1;i<=row;i++){
        let line="";
        //add space
        for(let space=1;space<=rows-i;space++){
            line +="";
        }

           //increasing number
          for(let num=1;num <=i;num++){
            line += num;
          }



        //decreasing numbers
        for(let num=i-1;num>=1;num--){
            line +=num;
        }

        console.log(line);
    }
}
   generatePyramid(5);






   let num1=1234;
   sumdigit=0;
   while(num1>0)
    {
    digit = num % 10
    console.log("digit",digit)
    sumdigit = sumdigit + digit
    console.log("sumdigit",sumdigit)
    num1= Math.floor(num1 /10)
    console.log("sumofdigite",sumofdigit);
   }


   






   


