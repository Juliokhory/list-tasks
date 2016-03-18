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

function completeTask(list = inbox){
    var listItems = taskList.children;
    for(let i = 0; i < listItems.length; i++){
        listItems[i].querySelector('input').addEventListener('change',()=>{
            listItems[i].querySelector('input').classList.add('dnone');
            listItems[i].querySelector('p').classList.remove('taskcomplete');
            var nid  = listItems[i].getAttribute('nid');
            for(let j = 0;j < list.tasks.length; j++){
                if(list.tasks[j].id == nid){
                    list.tasks[j].complete();
                }
            }
            if(listItems[i].querySelector('input').checked){
                listItems[i].classList.add('complete');
            }else {
                listItems[i].classList.remove('complete');
            }
        })
    }
}


function removeTask(list = inbox){
    var listItems = taskList.children;
    for(let i = 0; i < listItems.length; i++){
        listItems[i].querySelector('a').addEventListener('click', function (e){
            e.preventDefault();

            var nid  = listItems[i].getAttribute('nid');
            this.parentElement.remove();

            console.log(nid);
            for(let j = 0; j < list.tasks.length; j++){
                if(list.tasks[j].id == nid){
                    nid= list.tasks[j].id;
                    var ad = list.tasks[j];
                    list.removeTask(j);
                    console.log(ad);
                }
            }
        })
    }
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
