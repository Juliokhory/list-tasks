/**
 * Created by khory on 14/03/2016.
 */
var newTaskEl = document.getElementById('new-task');
var taskList = document.getElementById('task-list');
var newListTask = document.getElementById('name-list');


var inbox = new List('inbox');


function addTask(e, list = inbox){
    e.preventDefault();
    if(e.which === 13){
        var nTasks = list.tasks.length;
        var ultId=1;
        if(nTasks == 0){
            var newTask = new Task(this.value,ultId);
            list.addTask(newTask);
        }else{
            var posArr = list.tasks.length-1;
            ultId = (list.tasks[posArr].id)+1;
            var newTask = new Task(this.value,ultId);
            list.addTask(newTask);
        }
        printTask(this.value,ultId);
        this.value = "";
    }
}

function completeTask(){
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
    console.log(pid);

    for(let j = 0; j < inbox.tasks.length; j++){
        if(inbox.tasks[j].id == pid){
            inbox.removeTask(j);
        }
    }
    this.parentNode.remove();

}


function editTask(list = inbox){
    var listItems = taskList.children;
    for(let i = 0; i < listItems.length; i++){
        listItems[i].querySelector('span').addEventListener('click',()=>{
            var nameTask  = listItems[i].querySelector('span').textContent;
            console.log(nameTask);
        });

        listItems[i].querySelector('span').addEventListener('blur',()=>{
            list.tasks[i].edit(listItems[i].querySelector('span').textContent);
            console.table(list.tasks);
        })
    }

    for(let i = 0; i < listItems.length; i++) {
        listItems[i].querySelector('a')
    }
}


newTaskEl.addEventListener('keyup', addTask);
