/**
 * Created by khory on 14/03/2016.
 */
var newTaskEl = document.getElementById('new-task');
var taskList = document.getElementById('task-list');
var newListTask = document.getElementById('name-list');


var inbox = new List('inbox');


function addTask(e){
    e.preventDefault();
    if(e.which === 13){
        var ultId=1;
        if(inbox.tasks.length == 0){
            var newTask = new Task(this.value,ultId);
            inbox.addTask(newTask);
            console.table(inbox.tasks);
        }else{
            var posArr = inbox.tasks.length-1;
            ultId = inbox.tasks[posArr].id+1;
            var newTask = new Task(this.value,ultId);
            inbox.addTask(newTask);
            console.table(inbox.tasks);
        }
        printTask(this.value,ultId);
        this.value = "";
    }
}

function completeTask(){
    this.parentNode.classList.toggle('complete');
    var pid = this.parentNode;
    var idl = pid.getAttribute('nid');
    for(let j = 0; j < inbox.tasks.length; j++){
        if(inbox.tasks[j].id == idl){
            inbox.tasks[j].complete();
        }
    }
    console.table(inbox.tasks);
}


function removeTask(e){
    e.preventDefault();
    var pid  = this.parentNode.getAttribute('nid');
    for(let j = 0; j < inbox.tasks.length; j++){
        if(inbox.tasks[j].id == pid){
            inbox.removeTask(j);
            console.table(inbox.tasks);
        }
    }
    this.parentNode.remove();

}


function editTask(){
    var pid = this.parentNode.getAttribute('nid');
    for(let i = 0; i < inbox.tasks.length; i++){
        if(inbox.tasks[i].id == pid){
            inbox.tasks[i].edit( this.parentNode.querySelector('span').textContent);
            console.table(inbox.tasks);
        }
    }
}

newTaskEl.addEventListener('keyup', addTask);
