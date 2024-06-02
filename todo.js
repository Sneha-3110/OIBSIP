function newTask(){
    var task=document.getElementById("inputTask").value;
    if(task===""){
        alert("Enter Task");
        return;
    }
    var ul=document.getElementById("list");
    var li=document.createElement("li");
    li.textContent=task;

    li.onclick=function(){
        this.classList.toggle("completed");
    };

    var dlt=document.createElement("button");
    dlt.textContent="Delete";
    dlt.onclick=function(){
        ul.removeChild(li);
    };

    li.appendChild(dlt);
    ul.appendChild(li);
    document.getElementById("inputTask").value="";
}