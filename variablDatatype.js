let vaishnaviJ = Symbol('Vaishanvi')

let vaishnaviS = Symbol('Vaishanavi')

const sNameJ = 'Vaishanvi'
const sNameS = 'Vaishanvi'

console.log(vaishnaviJ == vaishnaviS)
console.log(sNameJ == sNameS)

let x=5
let y=5
console.log(x == y)

let age=10
let temperature=-5
console.log(age == temperature)

let name= "Durga"
let message= "hello"
console.log (name == message)


let isDurga = true
let isTired = false
console.log (isDurga == isTired)

let favoriteMovie = "spider-Man" ;
let sentence = " I Love Watching " + "favoriteMovie";
console.log (sentence);

let isHungry=true;

if (isHungry)
{
    console.log("go eat  !");
}
else{
    console.log("You're full  !");
}


let favoriteAnimal ={
    name: "sheruu",
    type: "dog",
    age: 13,
    isFriendly : true
};

console.log(favoriteAnimal);
console.log("animal name is:",favoriteAnimal);

let colors= ["red" , "blue", "pink","yellow","purple"];
console.log(colors);

colors.push ("yellow")
console.log("after adding yellow:",colors);

colors.pop ();
console.log("after removing the last color:",colors);



let mystery;
console.log("value:", mystery, "Type:",  typeof mystery);


mystery=null;
console.log("value:", mystery, "Type:",  typeof mystery);


let bigNumber=123445678900064n;
console.log(bigNumber * 2n);

let symbole1 = Symbol ("unique");
let Symbol2 = Symbol ("unique");

console.log(symbole1 == Symbol2);