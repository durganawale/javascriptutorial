function greet()
{
    console.log("hello world");
}
greet()


function greet1(name,age){
    console.log("hello",name,"durga",age,"your age is:")
}

greet(Durga , 21)


function addition(x,y){
    return a+b

}

    additionAB=add(20,23)
    console.log(additionAB)





function multipication(num){
    for(i=1; i<=10; i++){
        console.log(num,"*",i,"=",num*i)
    }
}

multipication(13)
multipication(19)


function add(a,b){
    return a +b
}

function sub(a,b){
    return a-b
}

function multipicatio(a,b){
    return a*b
}

function division(a,b){
    return a / b
}

console.log("addition" ,add(10,20))
console.log("substraction",sub (10,20))
console.log("multiplication",multipicatio(10,20))
console.log("division",division(10.20))

   //factorial of number
   let factorial = 1;
  function factorialnumber(number){
   for (i=1 ; i<=number ; i++)
   {
    factorial=factorial*i;
    console.log(i,factorial)
   }
  }
  factorialnumber(7)




//fibonacci sequence

function fibonacci(ite){
    n1=0;
    n2=1;
    console.log(n1,n2)
    for(i=3; i<=10; i++){
        temp=n2;
        n2=n1+n2;
        n1=temp;
        console.log(n1,n2)
    }
    
}