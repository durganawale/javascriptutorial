const task=[
{
    id:101,
    title:"study basic Programming",
    discription:"Watch Shorts or reels on programmin",
    status:"pending"
},
   {
  id:102,
  title:"Study Advance Css",
  discription:"For Intrive Priperation",
  status:"pending"
   }]

   const titleElmt = document.getElementById("taskTitleInput")
   const discriptionElmt= document.getElementById("taskDiscriptionInput")

   function renderTasks(ts){
    document.getElementById("renderTasks").innerHTML=ts.map((tsk,i)=>
        `<tr>
    <td>${i+1}</td>
         <td>${tsk.title}</td>
         <td>${tsk.discription}</td>
        <td>
         <span class="${tsk.status=="completed" ? "status-completed" : "status-pending"}">
    ${tsk.status}</td>
         <td>
         <button class="btn btn-success" title="Edit task"
         onclick="editTask(${tsk.id})">
         <i class="fa-solid fa-face-angry"></i>
         </button>
         <button class="btn btn-danger" title="Delate"
          onclick="delateTask(${tsk.id})">
         <i class="fa-solid fa-face-frown"></i>
         </button></td>
         </tr>
    `).join("");
   }

   function addNewTask(){
    titleInput = titleElmt.value 
    discriptionInput=discriptionElmt.value 

      const newtask={
        id:Date.now(),
        title:titleInput,
        discription:discriptionInput,
        status:"pending"
      }
      const getFromLocalTask=getFromLocal()
      getFromLocalTask.push(newtask)
      SaveToLocal(getFromLocalTask)
      renderTasks(getFromLocalTask)

      titleElmt.value=''
      discriptionElmt.value=''

   }

   function delateTask(ID){
      const getFromLocalTask=getFromLocal()
    index = getFromLocalTask.findIndex((t) => t.id == ID)
    console.log(index)
    if (index == -1) {
        alert("Task not found")
    } else {
        getFromLocalTask.splice(index, 1)
    }
    SaveToLocal(getFromLocalTask)
    renderTasks(getFromLocalTask)
   }

   function editTask(ID) {
    const getFromLocalTask=getFromLocal()
    index = getFromLocalTask.findIndex((t) => t.id == ID)
    if (index == -1) {
        alert("Task not found")
    } else {
        if (getFromLocalTask[index].status == "pending") {
            getFromLocalTask[index].status = "Completed"
        } else {
            getFromLocalTask[index].status = "Pending"
        }
    }
    SaveToLocal(getFromLocalTask)
    renderTasks(getFromLocalTask)
}

function SaveToLocal(ts=task){
    localStorage.setItem("b87Tasks",JSON.stringify(ts))
}

function getFromLocal(){
    return JSON.parse(localStorage.getItem("b87Tasks"))
}
     window.addEventListener('load',()=>{
       let  firstGetFromLocal = getFromLocal()

        if(!firstGetFromLocal){
        SaveToLocal()
        }console.log(firstGetFromLocal)
        renderTasks(firstGetFromLocal)
       })
   