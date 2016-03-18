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
        }else{
            var posArr = inbox.tasks.length-1;
            ultId = inbox.tasks[posArr].id+1;
            var newTask = new Task(this.value,ultId);
            inbox.addTask(newTask);
        }
        printTask(this.value,ultId);
        this.value = "";
    }
}

function completeTask(){
    this.parentNode.classList.add('complete');
    var pid = this.parentNode;
    var idl = pid.getAttribute('nid');
        console.log(idl);
    for(let j = 0; j < inbox.tasks.length; j++){
        if(inbox.tasks[j].id == idl){
            inbox.tasks[j].complete();
        }
    }
}


function removeTask(e){
    e.preventDefault();
    var pid  = this.parentNode.getAttribute('nid');
    for(let j = 0; j < inbox.tasks.length; j++){
        if(inbox.tasks[j].id == pid){
            inbox.removeTask(j);
        }
    }
    this.parentNode.remove();

}


function editTask(){
    var pid = this.parentNode.getAttribute('nid');
    console.log(pid);
    for(let i = 0; i < inbox.tasks.length; i++){
        if(inbox.tasks[i].id == pid){
            inbox.tasks[i].edit( this.parentNode.querySelector('span').textContent);
        }
    }
}


newTaskEl.addEventListener('keyup', addTask);
