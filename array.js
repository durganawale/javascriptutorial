stud1= "Durga"
stud2 ="Vaishu"
stud3 = "Pornima"

students = []
console.log(typeof(students))

fruits= ['Apple','Mango','Bannana',]
console.log(fruits[0])
console.log(fruits[2])
console.log(fruits)

fruits.push('cherry')
console.log(fruits)

fruits.unshift("Papaya")
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.pop()
console.log(fruits)

subfruits = fruits.slice(2,4)
console.log(subfruits)

console.log(fruits)

fruits.splice(1,0,"kiwi","Guava")
console.log(fruits)


fruits.splice(4,1)
console.log(fruits)


indexnumber=fruits.indexOf("kiwi")
console.log(indexnumber)

indexNum=fruits.indexOf("orange")
console.log(indexNum)

console.log(fruits.includes("orange"))
    
if(!fruits.includes("Greeps")){
    console.log("fruits Not Found")
}else{
    console.log("Add To Cards")
}


len = fruits.length
for(i=0; i<len; i++){
    console.log(fruits[i])
}
fruits[len]

for (val of fruits){
    console.log(val)
}

for (ind in fruits){
    console.log(ind)
}


const revfruits =[]
for(i.len;i>=0; i--){
    revfruits.push(fruits[i])
}
  console.log("fruitsArray" ,fruits)
  console.log("ReveraseFruits", revfruits)




numArray =[ 22,24,30,40,50]
let largestNum=0
let smalllestNum = Infinity
let secoundLargest
for ( i =0; i<numArray.length; i++){
    if (numArray[i]> largestNum){
        largestNum = numArray[i]
    }
}
    for (i= 0; i<numArray.length; i++){

    if (numArray[i]<smalllestNum){
        smalllestNum = numArray[i]

    }
}
     console.log (smalllestNum,"smallestnumber")

     let fLargest = -Infinity
     let sLargest = -Infinity
     
     for(let i =0; i<numArray.length;i++){
        if (numArray[i] > fLargest){
            sLargest = fLargest
        fLargest = secoundLargest
     }
     else if (numArray[i] != fLargest && numArray[i] > sLargest){
        sLargest = numArray
     }
    }

    console.log(sLargest,"second Largest  ")



    function findSecondLargest(array){
        if (array.length > 2){
            console.log("Array Should contain greater than two element")
        }
    for (n of numArray){
        if(n>fLargest){
            sLargest = fLargest
            fLargest= n
        }
        else if (n !=fLargest && n > sLargest){
            sLargest = n
        }
    }
    console.log(sLargest,"second LargestNumber")
    }




    arr1= [11,22,33,55,6]
    arr2=[11,43,87,22,6]
    const arraymerge=[...arr1]
    for (let i = 0; i <arr2.length ; i++){
            if (!arraymerge.includes(arr2[i])) {
        arraymerge .push(arr2[i]);
    }
    console.log(arraymerge,"withoutDuplication")
}

function frequencyCount(arr){
    let freq ={};
    for (let num of arr){
        freq [num]= (freq[num] || 0) +1;
    }
    return freq
}
console.log(frequencyCount([1,2,2,3,3,3,4,4,4,4]))

//implement a manual version of the include method
function manualIncludes(arr,value){
    for (let item of arr){
        if (item === value)
            return true
    }
    return false
}
console.log(manualIncludes([1,2,3],2))
console.log(manualIncludes([1,2,3],4))


// shift element in array to the left by one postion

function shiftLeft(arr){
    if ( arr.length === 0)
        return arr
    let first = arr.shift ()
    arr.push (first);
    return arr
}

console.log(shiftLeft([1,2,3,4]))

//rotate an array to right by k steps

function rotateRight (arr ,k ){
    k %= arr.length
    return arr.slice(-k).concat (arr.slice(0, -k)) 
}
console.log (rotateRight([1,2 ,3,4,5],2))

//remove all duplicate element in an array

function removeDuplicates(arr){
    return [...new set (arr)]
}
console.log (removeDuplicates([1,2,3,4,5,4]))

// 2D array repesenting a multiplication table for numbers 1 to 10

function multiplicationTable(){
    let table = []
    for (let i =1; i<=10; i++){
        let row = []
        for (let j=1; j<=10; j++){
            row.push(i * j)
        } 
         table.push(row)

    }
    return table
}
console.table(multiplicationTable())



    //find the intersection of two arrays

    function intersection(arr1 , arr2 ){
        return arr1. filter(item => arr2.includes(item))
    }
    console.log(intersection([1,2,3],[2,3,4]))
