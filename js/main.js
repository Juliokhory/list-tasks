/**
 * Created by khory on 14/03/2016.
 */
class Task {
    constructor(name,id){
        this.name = name;
        this.isComplete = false;
        this.id = id;
    }

    edit(newName){
        this.name = newName;
    }

    complete(){
        if(this.isComplete == true){
            this.isComplete=false;
        }else{
            this.isComplete=true;
        }
    }
}

class List{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }

    addTask(task){
        this.tasks.push(task);
    }

    removeTask(i){
        this.tasks.splice(i,1);
    }

    showTask(){
        console.table(this.tasks);
    }


}



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
    this.parentNode.classList.add('complete');
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

/**
 * Created by khory on 14/03/2016.
 */
function printTask(name,nid){

    var taskLi = document.createElement('li');
    taskLi.classList.add('task-item');
    taskLi.setAttribute('nid',nid)

    var taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.addEventListener('change',completeTask)

    var taskEl = document.createElement('span');
    taskEl.classList.add('name-task');
    taskEl.setAttribute('contenteditable','')
    taskEl.textContent = name;
    taskEl.addEventListener('blur',editTask)

    var taskRemove = document.createElement('a');
    taskRemove.textContent = 'X';
    taskRemove.classList.add('linkremove');
    taskRemove.addEventListener('click',removeTask);
    taskRemove.href = "";

    taskLi.appendChild(taskCheckbox);
    taskLi.appendChild(taskEl);
    taskLi.appendChild(taskRemove);

    taskList.appendChild(taskLi);

}