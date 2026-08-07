let toDos = ["project 1", "project 2"]

function renderToDos(){
    document.getElementById("Lists").innerHTML = toDos.map((task,i)=>`
                                        <li class="mb-2">
                                        ${task}
<button class="btn btn-danger" onclick="delateTask(${i})">Delete</button>                                
                                        </li>
        `).join(" ")
}

renderToDos()


function addNewTask(){
    inputTaskElmt = document.getElementById("inputTask")
    newTask = inputTaskElmt.value
    toDos.push(newTask)
    renderToDos()
    inputTaskElmt.value=''

}

function clearAll(){
    toDos = []
    renderToDos()
}
function delateTask(index){
    toDos.splice(index,1)
    renderToDos()
}

window.addEventListener('load',()=>{
    renderToDos()
})

// Student Mark Calculater

let StudMarks = []
function addMarks(){
    inputMarkElmt = document.getElementById("inputMarks") 
    mark = Number(inputMarkElmt.value)

            if (inputMarkElmt.value === "") {
        alert("Please enter marks.");
        return;
            }


    StudMarks.push(mark)
    document.getElementById("displayMarks").innerHTML=StudMarks.map((mark)=>`
    <span> ${mark}</span><br>`).join (" ")
    inputMarkElmt.value = " "
}
 

function CalculateMarks(){
  let total = 0
  let highest=StudMarks[0]
  let lowest=StudMarks[0]

  for (let i=0; i<StudMarks.length;i++){
    total+=StudMarks[i]
            if(StudMarks[i] > highest){
            highest = StudMarks[i];
        }

        if(StudMarks[i] < lowest){
            lowest = StudMarks[i];
        }
    }

    let average = total / StudMarks.length;
    document.getElementById("totalMarks").innerHTML = total;
    document.getElementById("Averagemark").innerHTML = average;
    document.getElementById("Higestmark").innerHTML = highest;
    document.getElementById("Lowestmark").innerHTML = lowest;
}

function ResetMarks(){
   StudMarks=[];
         document.getElementById("displayMarks").innerHTML = ""
    document.getElementById("totalMarks").innerHTML=""
    document.getElementById("Averagemark").innerHTML=""
    document.getElementById("Higestmark").innerHTML=""
    document.getElementById("Lowestmark").innerHTML=""
    document.getElementById("inputMarks").value=""

}

// 3. Search an array

let cars = ["Audi", "BMW", "Merceds", "Toyata", "Mahindra"];

document.getElementById("Array").innerHTML = cars
    .map(car => `<p>${car}</p>`)
    .join("");

function searchItem() {
    let input = document.getElementById("SearchInput").value.toLowerCase();
    let result = document.getElementById("Result");

    let found = false;

    for (let i = 0; i < cars.length; i++) {
        if (cars[i].toLowerCase() === input) {
            result.innerHTML = "Found: " + cars[i];
            found = true;
            break;
        }
    }

    if (!found) {
        result.innerHTML = "No Match Found";
    }
}


  //filter The Even Odd
  let number=[]
  function addNumber(){
    let value=document.getElementById("num").value
    if (value === " "){
        alert (" Enter The Number")
        return

    }
    number.push(Number(value));
    document.getElementById("num").value= ""
  }

  function evenNumber(){
    let even=number.filter(function(num){
        return num % 2 ===0
    });
    document.getElementById("even").innerHTML=even.join(" , ")
}
function oddNumber(){
    let odd= number.filter(function(num){
        return num % 2 !== 0
})
document.getElementById("odd").innerHTML=odd.join(", ")
}

function clearData(){
    number=[]
    document.getElementById("even").innerHTML=" "
    document.getElementById("odd").innerHTML=" "
    document.getElementById("num").value=""

}
    
  
  













//5. sort the Name
let Namearr = []
let Sortarr = []
function addName(){
    inputNameElmt = document.getElementById("inputName")
    name= inputNameElmt.value
    Namearr.push(name)

    

    document.getElementById("UnsortName").innerHTML = Namearr.map((name)=>`
    <span> ${name}</span><br>
    `).join (" ")
    inputNameElmt.value =" "
}


function sortArray(){
    sortarr=[...Namearr].sort()
    document.getElementById("sortName").innerHTML = Sortarr.map((name)=> `
    <span> ${name} </span>`).join(" ")
}

function clearName(){
    Namearr=[]
    Sortarr = []
     document.getElementById("UnsortName").innerHTML = ``
        document.getElementById("sortName").innerHTML = ``

    
}



