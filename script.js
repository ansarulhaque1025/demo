let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");

function addTask(){
    let task=input.value.trim();
    
    if(task === ""){
        return;
    }    
    
    let li=document.createElement("li");
    li.innerText=task;

    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.style.marginLeft="10px";
    
    delBtn.addEventListener("click",()=>{
        li.remove();
    });

    li.appendChild(delBtn);
    list.append(li);
    input.value="";
};

button.addEventListener("click",addTask);

input.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
        addTask();
    }
});